
import os
import socket
import time
import _thread
from netkit.contrib.tcp_client import TcpClient

from ..share import constants
from ..share.log import logger
from ..share.task import Task


class Connection(object):

    # 工作进展
    _work_progress = None

    def __init__(self, worker, address, conn_timeout):
        self.worker = worker
        # 直接创建即可
        self.client = TcpClient(Task, address=address, timeout=conn_timeout)

    def run(self):
        _thread.start_new_thread(self._monitor_work_timeout, ())
        while self.worker.enabled:
            try:
                self._handle()
            except:
                logger.error('exc occur. worker: %s',
                             self.worker, exc_info=True)

    def _monitor_work_timeout(self):
        """
        监控task的耗时
        :return:
        """

        while True:
            time.sleep(1)

            work_progress = self._work_progress
            if work_progress:
                past_time = time.perf_counter() - work_progress['begin_time']
                if self.worker.app.config['WORKER_WORK_TIMEOUT'] is not None and past_time > self.worker.app.config['WORKER_WORK_TIMEOUT']:
                    # 说明worker的处理时间已经太长了
                    logger.error('work timeout: %s / %s, request: %s',
                                 past_time, self.worker.app.config['WORKER_WORK_TIMEOUT'], work_progress['request'])
                    # 强制从子线程退出worker
                    os._exit(-1)

    def _handle(self):
        while self.worker.enabled and self.closed():
            if not self._connect():
                logger.error('connect fail. worker: %s, address: %s, sleep %ss',
                             self.worker, self.client.address, self.worker.app.config['WORKER_RECONNECT_INTERVAL'])
                time.sleep(self.worker.app.config['WORKER_RECONNECT_INTERVAL'])

        if not self.worker.enabled:
            # 安全退出
            return

        self._read_message()

    def _connect(self):
        try:
            self.client.connect()
        except:
            logger.error('exc occur. worker: %s', self.worker, exc_info=True)
            return False
        else:
            self.worker.app.events.open_conn(self)
            for bp in self.worker.app.blueprints:
                bp.events.open_app_conn(self)

            return True

    def write(self, data):
        """
        发送数据    True: 成功   else: 失败
        """
        if self.client.closed():
            logger.error('connection closed. worker: %s, data: %r', self.worker, data)
            return False

        # 只支持字符串
        self.worker.app.events.before_response(self, data)
        for bp in self.worker.app.blueprints:
            bp.events.before_app_response(self, data)

        ret = self.client.write(data)
        if not ret:
            logger.error('connection write fail. worker: %s, data: %r', self.worker, data)

        for bp in self.worker.app.blueprints:
            bp.events.after_app_response(self, data, ret)
        self.worker.app.events.after_response(self, data, ret)

        return ret

    def _read_message(self):
        task = None

        while 1:
            try:
                # 读取数据 gw_box
                task = self.client.read()
            except socket.timeout:
                # 超时了
                if not self.worker.enabled:
                    return
                else:
                    # 继续读
                    continue
            else:
                # 正常收到数据了
                break

        if task:
            self._on_read_complete(task)

        if self.closed():
            self._on_connection_close()

    def _on_connection_close(self):
        # 链接被关闭的回调

        logger.error('connection closed. worker: %s, address: %s', self.worker, self.client.address)

        for bp in self.worker.app.blueprints:
            bp.events.close_app_conn(self)
        self.worker.app.events.close_conn(self)

    def _on_read_complete(self, task):
        """
        数据获取结束
        """
        request = self.worker.app.request_class(self, task)

        # 设置task开始处理的时间和信息
        self._work_progress = dict(
            begin_time=time.perf_counter(),
            request=request,
        )
        self._handle_request(request)
        self._work_progress = None

    def _handle_request(self, request):
        """
        出现任何异常的时候，服务器不再主动关闭连接
        """
        if not request.is_valid:
            return False

        if not request.view_func:
            logger.info('cmd invalid. request: %s' % request)
            self.write(request.make_rsp(
                dict(ret=constants.RET_INVALID_CMD) if self.worker.app.config['WORKER_AUTO_RSP_ON_FAIL'] else None
            ))
            return False

        if not self.worker.got_first_request:
            self.worker.got_first_request = True
            self.worker.app.events.before_first_request(request)
            for bp in self.worker.app.blueprints:
                bp.events.before_app_first_request(request)

        self.worker.app.events.before_request(request)
        for bp in self.worker.app.blueprints:
            bp.events.before_app_request(request)
        if request.blueprint:
            request.blueprint.events.before_request(request)

        if request.interrupted:
            # 业务要求中断
            # 无论interrupt_data是否为None都返回
            self.write(request.make_rsp(
                request.interrupt_data
            ))
            return True

        view_func_exc = None

        try:
            rsp = request.view_func(request)
        except Exception as e:
            logger.error('view_func raise exception. e: %s, request: %s', e, request, exc_info=True)
            view_func_exc = e
            self.write(request.make_rsp(
                dict(ret=constants.RET_INTERNAL) if self.worker.app.config['WORKER_AUTO_RSP_ON_FAIL'] else None
            ))
        else:
            self.write(request.make_rsp(
                rsp
            ))

        if request.blueprint:
            request.blueprint.events.after_request(request, view_func_exc)
        for bp in self.worker.app.blueprints:
            bp.events.after_app_request(request, view_func_exc)
        self.worker.app.events.after_request(request, view_func_exc)

        return True

    def close(self):
        """
        直接关闭连接
        """
        self.client.close()

    def closed(self):
        """
        连接是否已经关闭
        :return:
        """
        return self.client.closed()

    def shutdown(self, how=2):
        return self.client.shutdown(how)
