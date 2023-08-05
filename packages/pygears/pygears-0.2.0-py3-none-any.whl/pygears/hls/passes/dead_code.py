from ..ir_utils import HDLVisitor, add_to_list, ir, res_false, IrVisitor, IrExprVisitor

class FuncCallExprFinder(IrExprVisitor):
    def __init__(self, called_funcs):
        self.called_funcs = called_funcs

    def visit_FunctionCall(self, node: ir.FunctionCall):
        self.called_funcs.add(node.name)
        super().visit_FunctionCall(node)


class FuncCallFinder(IrVisitor):
    def __init__(self):
        self.called_funcs = set()
        self.expr_visit = FuncCallExprFinder(self.called_funcs)

    def Expr(self, expr):
        self.expr_visit.visit(expr)

class RemoveDeadCode(HDLVisitor):
    def __init__(self, ctx):
        super().__init__(ctx)
        self.called_funcs = set()

    def AssignValue(self, node):
        return node

    def FuncReturn(self, node):
        return node

    def FunctionCall(self, node: ir.FunctionCall):
        self.called_funcs.add(node.name)
        return node

    def BaseBlock(self, block: ir.BaseBlock):
        stmts = []
        for stmt in block.stmts:
            add_to_list(stmts, self.visit(stmt))

        block.stmts = stmts
        return block

    # def ExprStatement(self, stmt: ir.ExprStatement):
    #     return None

    # TODO: Implement things properly for IfElseBlock (What if middle elif is missing?)

    def HDLBlock(self, node):
        stmts = node.stmts
        live_stmts = []

        if node.in_cond == res_false:
            return None

        for stmt in stmts:
            child = self.visit(stmt)
            if child is not None:
                live_stmts.append(child)

        if not node.stmts:
            return None

        node.stmts = live_stmts

        return node


def remove_dead_code(modblock, ctx):
    return RemoveDeadCode(ctx).visit(modblock)

def find_called_funcs(modblock, ctx):
    v = FuncCallFinder()
    v.visit(modblock)
    return v.called_funcs
