import os
import copy
import inspect

from typing import List
from dataclasses import dataclass
from pygears.conf import PluginBase, reg
from traceback import walk_stack
from .intf import Intf
from .port import InPort, OutPort, HDLConsumer, HDLProducer
from .hier_node import NamedHierNode
from .util import is_standard_func


class TooManyArguments(Exception):
    pass


class GearTypeNotSpecified(Exception):
    pass


class GearArgsNotSpecified(Exception):
    pass


def module():
    return reg['gear/current_module']


def filter_internals(t):
    is_internal = t[0].f_code.co_filename.startswith(os.path.dirname(__file__))
    is_boltons = 'decorator-gen' in t[0].f_code.co_filename
    return not is_internal and not is_boltons


def enum_stacktrace():
    return filter(filter_internals, walk_stack(f=None))


class GearHierRoot(NamedHierNode):
    def __init__(self, name=''):
        super().__init__(name)
        self.in_ports = []
        self.out_ports = []
        self.params = {}
        self.params.update(copy.deepcopy(reg['gear/params/meta']))
        self.params.update(copy.deepcopy(reg['gear/params/extra']))
        self.func = None
        self.const_args = []
        self.args = []
        self.trace = None

        def __main():
            pass

        self.definition = __main

    @property
    def hierarchical(self):
        return True


def gear_explicit_params(func, params):
    paramspec = inspect.getfullargspec(func)
    explicit_param_names = paramspec.kwonlyargs or []

    return {
        name: params[name]
        for name in explicit_param_names if name in params
    }

def struct_copy(s):
    if isinstance(s, dict):
        return type(s)({k:struct_copy(v) for k,v in s.items()})

    if isinstance(s, list):
        return type(s)([struct_copy(v) for v in s])

    return s


class Gear(NamedHierNode):
    def __init__(self, func, params):
        super().__init__(params['name'],
                         reg['gear/current_module'] if func else None)
        self.trace = list(enum_stacktrace())
        self.args = {}
        # self.params = struct_copy(params)

        self.params = params
        for p in reg['gear/params/extra']:
            if p not in params:
                continue

            self.params[p] = struct_copy(params[p])

        for p in reg['gear/params/meta']:
            if p not in params:
                continue

            self.params[p] = struct_copy(params[p])

        self.func = func
        self.const_args = {}
        self.in_ports: List[InPort] = []
        self.out_ports: List[OutPort] = []

    def __repr__(self):
        if self.parent is None:
            return f'Top'

        return f'{self.definition.__name__}("{self.name}")'

    def connect_input(self, args, const_args):
        for name, val in const_args.items():
            from pygears.lib import const
            const(val=val, intfs=[args[name]])

        for i, (name, intf) in enumerate(args.items()):
            port = InPort(self, i, name)
            intf.connect(port)
            self.in_ports.append(port)

        for port in self.in_ports:
            Intf(self.params[port.basename]).source(port)

        self.const_args = const_args
        self.args = args

    def connect_output(self, out_intfs, out_dtypes):

        dflt_dout_name = reg['gear/naming/default_out_name']
        for i in range(len(self.outnames), len(out_dtypes)):
            if out_intfs and hasattr(out_intfs[i], 'var_name'):
                self.outnames.append(out_intfs[i].var_name)
            else:
                self.outnames.append(dflt_dout_name if len(out_dtypes) ==
                                     1 else f'{dflt_dout_name}{i}')

        self.out_ports = [
            OutPort(self, i, name) for i, name in enumerate(self.outnames)
        ]

        # Connect internal interfaces
        if out_intfs:
            for i, r in enumerate(out_intfs):
                r.connect(self.out_ports[i])
        else:
            for dtype, port in zip(out_dtypes, self.out_ports):
                Intf(dtype).connect(port)

        for name, dtype in zip(self.outnames, out_dtypes):
            self.params[name] = dtype

    @property
    def hierarchical(self):
        if self.in_ports:
            return not any(
                any(isinstance(c, HDLConsumer) for c in p.consumer.consumers)
                for p in self.in_ports)
        else:
            return not any(
                isinstance(p.producer.producer, HDLProducer)
                for p in self.out_ports)

    @property
    def definition(self):
        return self.params.get('definition', None)

    @property
    def outnames(self):
        return self.params.get('outnames', None)

    @property
    def tout(self):
        if len(self.out_ports) > 1:
            return tuple(i.dtype for i in self.out_ports)
        elif len(self.out_ports) == 1:
            return self.out_ports[0].dtype
        else:
            return None

    @property
    def signals(self):
        return {sig.name: sig for sig in self.params['signals']}

    @property
    def dout(self):
        ret = self.out_port_intfs
        if len(ret) == 1:
            return ret[0]
        else:
            return ret

    @property
    def local_intfs(self):
        intfs = {}  # acts as ordered set
        for c in self.child:
            for i in c.inputs + c.outputs:
                intfs[i] = None

        return list(intfs.keys())

    @property
    def in_port_intfs(self):
        return tuple(p.consumer for p in self.in_ports)

    @property
    def out_port_intfs(self):
        return tuple(p.producer for p in self.out_ports)

    @property
    def inputs(self):
        return tuple(p.producer for p in self.in_ports)

    @property
    def outputs(self):
        return tuple(p.consumer for p in self.out_ports)

    @property
    def explicit_params(self):
        return gear_explicit_params(self.func, self.params)

    def remove(self):
        for p in self.in_ports:
            if p.producer is not None:
                try:
                    p.producer.disconnect(p)
                except ValueError:
                    pass

        for p in getattr(self, 'out_ports', []):
            if p.producer is not None:
                p.producer.disconnect(p)

        try:
            super().remove()
        except ValueError:
            pass


class create_hier:
    def __init__(self, gear):
        self.gear = gear

    def __enter__(self):
        reg['gear/current_module'] = self.gear
        return self

    def __exit__(self, exception_type, exception_value, traceback):
        reg['gear/current_module'] = self.gear.parent


@dataclass(frozen=True, eq=True)
class InSig:
    name: str
    width: int
    modport: str = 'input'


@dataclass(frozen=True, eq=True)
class OutSig:
    name: str
    width: int
    modport: str = 'output'

    def write(self, val):
        pass


class GearPlugin(PluginBase):
    @classmethod
    def bind(cls):
        reg['gear/naming'] = {'default_out_name': 'dout'}

        reg['gear'].subreg('params')

        reg['gear/params'].subreg(
            'meta', {
                'enablement': True,
                'outnames': None,
                'signals': (InSig('clk', 1), InSig('rst', 1))
            })

        reg['gear/params'].subreg('extra', {
            'name': None,
            'intfs': [],
            'sigmap': {},
            '__base__': None
        })

        reg['gear/root'] = Gear(None, params={'name': ''})
        reg['gear/current_module'] = reg['gear/root']
        reg['gear/exec_context'] = 'compile'

    @classmethod
    def reset(cls):
        reg['gear/root'] = Gear(None, params={'name': ''})
        reg['gear/current_module'] = reg['gear/root']
        reg['gear/code_map'] = []
