import sys
from collections import Counter

from .share.config import Config, ConfigAttribute
from .share.utils import import_module_or_string
from .share.log import logger
from .share import constants
from .share.mixins import RoutesMixin, AppEventsMixin


class Pansy(RoutesMixin, AppEventsMixin):

    ############################## configurable begin ##############################
    name = ConfigAttribute('NAME')

    host = ConfigAttribute('HOST')
    port = ConfigAttribute('PORT')

    room_id_begin = ConfigAttribute('ROOM_ID_BEGIN')
    room_id_end = ConfigAttribute('ROOM_ID_END')
    room_concurrent = ConfigAttribute('ROOM_CONCURRENT')

    box_class = ConfigAttribute('BOX_CLASS',
                                get_converter=import_module_or_string)
    master_class = ConfigAttribute('MASTER_CLASS',
                                   get_converter=import_module_or_string)
    station_class = ConfigAttribute('STATION_CLASS',
                                    get_converter=import_module_or_string)
    worker_class = ConfigAttribute('WORKER_CLASS',
                                   get_converter=import_module_or_string)
    debug = ConfigAttribute('DEBUG')

    conn_timeout = ConfigAttribute('CONN_TIMEOUT')
    reconnect_interval = ConfigAttribute('RECONNECT_INTERVAL')
    stop_timeout = ConfigAttribute('STOP_TIMEOUT')
    work_timeout = ConfigAttribute('WORK_TIMEOUT')
    tasks_max_size = ConfigAttribute('TASKS_MAX_SIZE')

    ############################## configurable end   ##############################

    config = None

    master = None
    blueprints = None

    def __init__(self):
        RoutesMixin.__init__(self)
        AppEventsMixin.__init__(self)

        self.config = Config(defaults=constants.DEFAULT_CONFIG)
        self.blueprints = list()

        self.master = self.master_class(self)

    def register_blueprint(self, blueprint):
        blueprint.register_to_app(self)

    def run(self, host=None, port=None, debug=None):
        self._merge_routes()

        if host is not None:
            self.config.update({
                'HOST': host,
            })

        if port is not None:
            self.config.update({
                'PORT': port,
            })

        if debug is not None:
            self.debug = debug

        self.master.run()

    def make_proc_name(self, subtitle):
        """
        获取进程名称
        :param subtitle:
        :return:
        """
        proc_name = '[%s:%s %s] %s' % (
            constants.NAME,
            subtitle,
            self.name,
            ' '.join([sys.executable] + sys.argv)
        )

        return proc_name

    def _merge_routes(self):
        """
        合并routes
        :return:
        """

        for bp in self.blueprints:
            for cmd, rule in bp.rule_map.items():
                new_rule = dict(rule)
                new_rule['blueprint'] = bp
                new_rule['endpoint'] = '.'.join([bp.name, new_rule['endpoint']])

                self.add_route_rule(cmd, **new_rule)

    def __repr__(self):
        return '<%s name: %s>' % (
            type(self).__name__, self.name
        )

