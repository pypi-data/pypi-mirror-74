from pyadb.cmd import BaseCommand


class TempleCode(BaseCommand):
    def _create_parser(self, p):
        pyadb_parser = p.add_parser('temple-code')
        pyadb_parser.add_argument('-c', '--capture_event', action='store_true',
                                  default=None,
                                  help='capture event')
        pyadb_parser.add_argument('-t', '--top_activity', action='store_true',
                                  default=None,
                                  help='top activity')
        pyadb_parser.add_argument(
            '-i', '--imei', action='store_true', help='get imei')
        return pyadb_parser

    def _parse_args(self, args):
        pass

    def _execute(self):
        pass
