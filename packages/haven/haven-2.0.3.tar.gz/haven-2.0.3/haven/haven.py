import sys
import signal
from collections import Counter
import setproctitle

from .mixins import RoutesMixin, AppEventsMixin
from .log import logger
from . import constants


class Haven(RoutesMixin, AppEventsMixin):
    ############################## configurable begin ##############################
    name = constants.NAME
    # 连接空闲超时，长期没收到消息被认为连接超时。None代表不超时
    timeout = None
    ############################## configurable end   ##############################

    enable = True
    processes = None
    debug = False
    got_first_request = False
    blueprints = None

    def __init__(self):
        RoutesMixin.__init__(self)
        AppEventsMixin.__init__(self)
        self.processes = []
        self.blueprints = list()

    def register_blueprint(self, blueprint):
        blueprint.register_to_app(self)

    def run(self, host=None, port=None, debug=None):
        """
        启动
        :param host: 监听IP
        :param port: 监听端口
        :param debug: 是否debug
        :param workers: workers数量
        :return:
        """
        self._merge_routes()

        if host is None:
            host = constants.SERVER_HOST
        if port is None:
            port = constants.SERVER_PORT
        if debug is not None:
            self.debug = debug

        logger.info('Running server on %s, debug: %s',
                    (host, port), self.debug)
        setproctitle.setproctitle(self._make_proc_name())

        self._prepare_server((host, port))
        # 只能在主线程里面设置signals
        self._handle_signals()
        self._worker_run()

    def acquire_got_first_request(self):
        pass

    def release_got_first_request(self):
        pass

    def repeat_timer(self, interval):
        raise NotImplementedError

    def _make_proc_name(self):
        """
        获取进程名称
        :return:
        """
        proc_name = '[%s %s] %s' % (
            constants.NAME,
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

    def _on_worker_start(self):
        self.events.start_worker()
        for bp in self.blueprints:
            bp.events.start_app_worker()

        self.events.repeat_timer()
        for bp in self.blueprints:
            bp.events.repeat_app_timer()

    def _on_worker_stop(self):
        for bp in self.blueprints:
            bp.events.stop_app_worker()
        self.events.stop_worker()

    def _worker_run(self):
        self._on_worker_start()

        try:
            self._serve_forever()
        except KeyboardInterrupt:
            pass
        except:
            logger.error('exc occur.', exc_info=True)
        finally:
            self._on_worker_stop()

    def _handle_signals(self):
        def exit_handler(signum, frame):
            self.enable = False
            raise KeyboardInterrupt

        # INT, TERM为强制结束
        signal.signal(signal.SIGINT, exit_handler)
        signal.signal(signal.SIGTERM, exit_handler)
        if hasattr(signal, 'SIGHUP'):
            # windows下没有
            signal.signal(signal.SIGHUP, signal.SIG_IGN)

    def _prepare_server(self, address):
        raise NotImplementedError

    def _serve_forever(self):
        raise NotImplementedError
