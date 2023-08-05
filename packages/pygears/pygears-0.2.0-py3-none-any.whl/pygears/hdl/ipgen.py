from pygears import reg
from pygears.entry import EntryPlugin, cmd_register


def ipgen(
    tool,
    design=None,
    outdir=None,
    include=None,
    top='/',
    build=True,
    generate=True,
    **kwds):

    backends = reg['entry/cmds/ipgen/cmds']
    if tool not in backends:
        raise Exception(f'Unknown backend synth tool "{tool}".')

    return backends[tool]['entry'](
        design=design, include=include, top=top, build=build, outdir=outdir, **kwds)


class IpgenPlugin(EntryPlugin):
    @classmethod
    def bind(cls):
        conf = cmd_register(
            ['ipgen'],
            ipgen,
            structural=True,
            aliases=['ip'],
            help='generate IP core',
            dest='tool')

        baseparser = conf['baseparser']

        baseparser.add_argument('design', type=str)
        baseparser.add_argument(
            '-I', '--include', action='append', default=[], help="HDL include directory")
        baseparser.add_argument('--top', '-t', type=str, default='/')
        baseparser.add_argument('--build', '-b', action='store_false')
        baseparser.add_argument('--generate', '-g', action='store_false')
        baseparser.add_argument('--outdir', '-o', type=str)
        baseparser.add_argument(
            '--lang', '-l', type=str, choices=['v', 'sv'], default='sv')
