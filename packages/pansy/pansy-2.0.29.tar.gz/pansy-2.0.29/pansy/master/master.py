
import multiprocessing
import signal
import time
import _thread
import setproctitle


class Master:

    app = None

    processes = None

    enabled = True

    def __init__(self, app):
        self.app = app
        self.processes = list()

    def run(self):
        setproctitle.setproctitle(self.app.make_proc_name(
            'master:%s-%s' % (self.app.room_id_begin, self.app.room_id_end)
        ))
        self._handle_signals()

        self._spawn_stations()

    def _create_station(self, room_id_begin, room_id_end):
        process = multiprocessing.Process(
            target=self.app.station_class(self.app, room_id_begin, room_id_end).run,
        )
        # master不可以独自退出
        process.daemon = False
        # 标记room_id
        process.init_params = dict(
            room_id_begin=room_id_begin,
            room_id_end=room_id_end,
        )

        process.start()

        return process

    def _spawn_stations(self):
        """
        监控进程
        :return:
        """
        for room_id_begin in range(self.app.room_id_begin, self.app.room_id_end+1, self.app.room_concurrent):
            # 注意要-1，因为是闭区间
            room_id_end = min(room_id_begin + self.app.room_concurrent-1, self.app.room_id_end)
            self.processes.append(self._create_station(
                room_id_begin, room_id_end
            ))

        while True:
            for idx, process in enumerate(self.processes):
                if process and not process.is_alive():
                    self.processes[idx] = None

                    if self.enabled:
                        # 需要重启启动process
                        self.processes[idx] = self._create_station(**process.init_params)

            if not self.enabled and not any(self.processes):
                # 可以彻底停掉了
                break

            time.sleep(0.1)

    def _handle_signals(self):
        def kill_processes_later(processes, timeout):
            """
            等待一段时间后杀死所有进程
            :param processes:
            :param timeout:
            :return:
            """
            def _kill_processes():
                # 等待一段时间
                time.sleep(timeout)

                for p in processes:
                    if p and p.is_alive():
                        # 说明进程还活着
                        p.kill()

            _thread.start_new_thread(_kill_processes, ())

        def stop_handler(signum, frame):
            """
            等所有子进程结束，父进程也退出
            """
            self.enabled = False

            # 一定要这样，否则后面kill的时候可能会kill错
            processes = self.processes[:]

            # 如果是终端直接CTRL-C，子进程自然会在父进程之后收到INT信号，不需要再写代码发送
            # 如果直接kill -INT $parent_pid，子进程不会自动收到INT
            # 所以这里可能会导致重复发送的问题，重复发送会导致一些子进程异常，所以在子进程内部有做重复处理判断。
            for p in processes:
                if p:
                    p.terminate()

            if self.app.stop_timeout is not None:
                kill_processes_later(processes, self.app.stop_timeout)

        # INT为强制结束
        signal.signal(signal.SIGINT, stop_handler)
        # TERM为安全结束
        signal.signal(signal.SIGTERM, stop_handler)
        # HUP为热更新
        signal.signal(signal.SIGHUP, signal.SIG_IGN)

