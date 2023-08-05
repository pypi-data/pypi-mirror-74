from pygears.conf import PluginBase, reg
from . import ir
from .ast.cast import resolve_cast_func
from .ast.call import resolve_gear_call
from pygears import Intf

from pygears.core.gear import OutSig

from functools import reduce
from pygears.typing import Int, Uint, code, div, Queue, Integral, Float, Union
from pygears.typing import is_type, typeof, Tuple, Array
from pygears.typing import floor, cast, signed, saturate
from pygears.typing.queue import QueueMeta

from pygears.util.utils import gather, qrange
from pygears.sim import clk
from pygears.lib.rng import qrange as qrange_gear
from pygears.lib.saturate import saturate as saturate_gear


def call_floor(arg):
    t_arg = arg.dtype
    int_cls = Int if t_arg.signed else Uint
    arg_to_int = ir.CastExpr(arg, int_cls[t_arg.width])
    if t_arg.fract >= 0:
        return ir.BinOpExpr((arg_to_int, ir.ResExpr(Uint(t_arg.fract))), ir.opc.RShift)
    else:
        return ir.BinOpExpr((arg_to_int, ir.ResExpr(Uint(-t_arg.fract))), ir.opc.LShift)


def call_div(a, b, subprec):
    t_a = a.dtype
    t_b = b.dtype

    t_div = div(t_a, t_b, int(subprec.val))

    def fixp__div__(op1: t_a, op2: t_b) -> t_div:
        return t_div(op1) // op2

    return fixp__div__


def max_expr(op1, op2):
    op1_compare = op1
    op2_compare = op2

    # TODO: Sort this casting out
    signed = typeof(op1.dtype, Int) or typeof(op2.dtype, Int)
    if signed and typeof(op1.dtype, Uint):
        op1_compare = resolve_cast_func(op1, Int)
    if signed and typeof(op2.dtype, Uint):
        op2_compare = resolve_cast_func(op2, Int)

    cond = ir.BinOpExpr((op1_compare, op2_compare), ir.opc.Gt)
    return ir.ConditionalExpr(cond=cond, operands=(op1, op2))


def call_len(arg, **kwds):
    if isinstance(arg, ir.ConcatExpr):
        return ir.ResExpr(len(arg.operands))

    if isinstance(arg, ir.ResExpr):
        return ir.ResExpr(len(arg.val))

    if isinstance(arg, ir.Name):
        return ir.ResExpr(len(arg.dtype))

    raise Exception


def call_print(*arg, **kwds):
    pass


def call_float(arg, **kwds):
    return ir.CastExpr(arg, cast_to=Float)


def call_int(arg, **kwds):
    # ignore cast
    if typeof(arg.dtype, (Uint, Int)):
        return arg
    elif typeof(arg.dtype, Integral):
        if arg.dtype.signed:
            return ir.CastExpr(arg, cast_to=Int[arg.dtype.width])
        else:
            return ir.CastExpr(arg, cast_to=Uint[arg.dtype.width])


def call_all(arg, **kwds):
    return ir.ArrayOpExpr(arg, ir.opc.BitAnd)


def call_any(arg, **kwds):
    return ir.ArrayOpExpr(arg, ir.opc.BitOr)


def call_max(*arg, **kwds):
    if len(arg) != 1:
        return reduce(max_expr, arg)

    arg = arg[0]

    assert typeof(arg.dtype, Tuple), 'Not supported yet...'

    op = []
    for field in arg.dtype.fields:
        op.append(ir.SubscriptExpr(arg, ir.ResExpr(field)))

    return reduce(max_expr, op)


def call_sub(obj, arg):
    return ir.CastExpr(arg, cast_to=obj.sub())


def outsig_write(obj, arg):
    return ir.AssignValue(obj, arg)


def call_get(obj, *args, **kwds):
    return obj


def call_get_nb(obj, *args, **kwds):
    return ir.AssignValue(ir.Component(obj, 'ready'), ir.res_true)
    # return obj


def call_put_nb(obj, arg):
    return [
        ir.AssignValue(ir.Component(obj, 'data'), arg),
        ir.AssignValue(ir.Component(obj, 'valid'), ir.res_true)
    ]
    # return obj


def call_clk(*arg, **kwds):
    return None


def call_empty(obj, *arg, **kwds):
    assert not arg, 'Empty should be called without arguments'
    return ir.UnaryOpExpr(ir.Component(obj, 'valid'), ir.opc.Not)


def call_gather(*arg, **kwds):
    return ir.ConcatExpr(operands=list(arg))


def call_cast(arg, cast_type):
    return resolve_cast_func(arg, cast_type.val)


def call_signed(val):
    if val.dtype.signed:
        return val

    if typeof(val.dtype, Uint):
        return resolve_cast_func(val, Int)

    raise Exception("Unsupported signed cast")


def call_code(val, cast_type=ir.ResExpr(Uint)):
    cast_type = code(val.dtype, cast_type.val)
    if val.dtype == cast_type:
        return val

    return ir.CastExpr(val, cast_to=cast_type)


def call_type(arg):
    return ir.ResExpr(arg.dtype)


def call_isinstance(arg, dtype):
    if isinstance(dtype, ir.ResExpr):
        dtype = dtype.val

    if isinstance(arg, ir.ResExpr):
        return isinstance(arg.val, dtype)

    return ir.ResExpr(typeof(arg.dtype, dtype))


def call_is_type(arg):
    if not isinstance(arg, ir.ResExpr):
        return ir.res_false

    return ir.ResExpr(is_type(arg.val))


def call_typeof(arg, dtype):
    if isinstance(dtype, ir.ResExpr):
        dtype = dtype.val

    if not isinstance(arg, ir.ResExpr):
        return ir.res_false

    return ir.ResExpr(typeof(arg.val, dtype))


def call_subs_fix_index(orig, path, val):
    parts = []
    for i in range(len(orig.dtype)):
        p = ir.SubscriptExpr(orig, ir.ResExpr(i))
        if isinstance(path, tuple):
            if path[0].val == i:
                p = ir.CastExpr(call_subs(p, path[1:], val), p.dtype)
        elif path.val == i:
            p = ir.CastExpr(val, p.dtype)

        parts.append(p)

    return ir.CastExpr(ir.ConcatExpr(parts), orig.dtype)


def call_subs_var_index(orig, path, val):
    parts = []
    for i in range(len(orig.dtype)):
        p = ir.SubscriptExpr(orig, ir.ResExpr(i))
        if isinstance(path, tuple):
            cond = ir.BinOpExpr((path[0], ir.ResExpr(i)), ir.opc.Eq)
            repl = ir.CastExpr(call_subs(p, path[1:], val), p.dtype)
        else:
            cond = ir.BinOpExpr((path, ir.ResExpr(i)), ir.opc.Eq)
            repl = ir.CastExpr(val, p.dtype)

        parts.append(ir.ConditionalExpr((repl, p), cond))

    return ir.CastExpr(ir.ConcatExpr(parts), orig.dtype)


def call_subs(orig, *args, **kwds):
    if args:
        path, val = args
        if isinstance(path, tuple) and len(path) == 1:
            path = path[0]

        if isinstance(path, tuple) and isinstance(path[0], ir.ResExpr):
            return call_subs_fix_index(orig, path, val)
        elif not isinstance(path, tuple) and isinstance(path, ir.ResExpr):
            return call_subs_fix_index(orig, path, val)
        else:
            return call_subs_var_index(orig, path, val)

    if kwds:
        parts = []
        for i, name in enumerate(orig.dtype.fields):
            p = ir.SubscriptExpr(orig, ir.ResExpr(i))
            if name in kwds:
                p = ir.CastExpr(kwds[name], p.dtype)

            parts.append(p)

        return ir.CastExpr(ir.ConcatExpr(parts), orig.dtype)


def call_enumerate(arg):
    arg.enumerated = True
    return arg


def call_qrange(*args):
    return resolve_gear_call(qrange_gear.func, args, {})


def call_range(*args):
    ret = ir.CallExpr(range,
                      dict(zip(['start', 'stop', 'step'], args)),
                      params={'return': Queue[args[0].dtype]})

    ret.pass_eot = False
    return ret


def call_breakpoint():
    return None


def ir_builtin(func):
    reg['hls/ir_builtins'].get(func, None)


class AddIntfOperPlugin(PluginBase):
    @classmethod
    def bind(cls):
        ir_builtins = {
            gather:
            call_gather,
            all:
            call_all,
            any:
            call_any,
            max:
            call_max,
            clk:
            call_clk,
            float:
            call_float,
            int:
            call_int,
            len:
            call_len,
            print:
            call_print,
            type:
            call_type,
            isinstance:
            call_isinstance,
            is_type:
            call_is_type,
            typeof:
            call_typeof,
            div:
            call_div,
            floor:
            call_floor,
            Intf.empty:
            call_empty,
            Intf.get:
            call_get,
            Intf.get_nb:
            call_get_nb,
            Intf.put_nb:
            call_put_nb,
            cast:
            call_cast,
            signed:
            call_signed,
            QueueMeta.sub:
            call_sub,
            object.__getattribute__(Array, 'subs').func:
            call_subs,
            object.__getattribute__(Tuple, 'subs').func:
            call_subs,
            OutSig.write:
            outsig_write,
            Array.code:
            call_code,
            Tuple.code:
            call_code,
            code:
            call_code,
            qrange:
            call_qrange,
            range:
            call_range,
            enumerate:
            call_enumerate,
            saturate:
            lambda *args, **kwds: resolve_gear_call(saturate_gear.func, args
                                                    if len(args) == 1 else [args[0]], kwds
                                                    if len(kwds) == 1 else {'t': args[1]})
        }

        import sys
        if sys.version_info[1] >= 7:
            ir_builtins[breakpoint] = call_breakpoint

        int_ops = {
            ir.opc.Add: '__add__',
            ir.opc.BitAnd: '__and__',
            ir.opc.BitOr: '__or__',
            ir.opc.BitXor: '__xor__',
            ir.opc.Div: '__truediv__',
            ir.opc.Eq: '__eq__',
            ir.opc.Gt: '__gt__',
            ir.opc.GtE: '__ge__',
            ir.opc.FloorDiv: '__floordiv__',
            ir.opc.Lt: '__lt__',
            ir.opc.LtE: '__le__',
            ir.opc.LShift: '__lshift__',
            ir.opc.Mod: '__mod__',
            ir.opc.Mult: '__mul__',
            ir.opc.NotEq: '__ne__',
            ir.opc.RShift: '__rshift__',
            ir.opc.Sub: '__sub__'
        }

        # TODO: User @wraps for better error reporting
        for op, name in int_ops.items():
            ir_builtins[getattr(int, name)] = lambda a, b, *, x=op: ir.BinOpExpr(
                (call_int(a), b), x)

        reg['hls/ir_builtins'] = ir_builtins
