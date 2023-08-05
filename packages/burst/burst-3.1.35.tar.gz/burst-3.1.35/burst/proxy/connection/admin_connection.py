
import json

from twisted.internet.protocol import Protocol, Factory
from netkit.box import Box

from ...share.utils import safe_call
from ...share.log import logger
from ...share import constants


class AdminConnectionFactory(Factory):

    def __init__(self, proxy):
        self.proxy = proxy

    def buildProtocol(self, addr):
        return AdminConnection(self, addr)


class AdminConnection(Protocol):
    _read_buffer = None

    # 客户端IP的数字
    _client_ip_num = None

    def __init__(self, factory, address):
        self.factory = factory
        self.address = address
        self._read_buffer = b''

    def dataReceived(self, data):
        """
        当数据接受到时
        :param data:
        :return:
        """
        self._read_buffer += data

        while self._read_buffer:
            # 因为box后面还是要用的
            box = Box()
            ret = box.unpack(self._read_buffer)
            if ret == 0:
                # 说明要继续收
                return
            elif ret > 0:
                # 收好了
                self._read_buffer = self._read_buffer[ret:]
                safe_call(self._on_read_complete, box)
                continue
            else:
                # 数据已经混乱了，全部丢弃
                logger.error('buffer invalid. proxy: %s, ret: %d, read_buffer: %r',
                             self.factory.proxy, ret, self._read_buffer)
                self._read_buffer = b''
                return

    def _auth_user(self, username, password):
        """
        验证用户
        :param username:
        :param password:
        :return:
        """

        return (self.factory.proxy.app.config['ADMIN_USERNAME'] or '',
                self.factory.proxy.app.config['ADMIN_PASSWORD'] or '') == (
            username or '', password or ''
        )

    def _on_read_complete(self, box):
        """
        完整数据接收完成
        :param box: 解析之后的box
        :return:
        """

        # 无论是哪一种请求，都先验证用户
        req_body = json.loads(box.body)

        rsp = None

        if not self._auth_user(req_body['auth']['username'], req_body['auth']['password']):
            rsp = box.map(dict(
                ret=constants.RET_ADMIN_AUTH_FAIL
            ))
        else:
            if box.cmd == constants.CMD_ADMIN_SERVER_STAT:
                workers = dict([(group['id'], group['count']) for group in
                                self.factory.proxy.app.group_list])
                idle_workers = dict([(group_id, len(_workers)) for group_id, _workers in
                                     self.factory.proxy.task_dispatcher.idle_workers_dict.items()])
                busy_workers = dict([(group_id, len(_workers)) for group_id, _workers in
                                     self.factory.proxy.task_dispatcher.busy_workers_dict.items()])

                # 正在处理的tasks
                pending_tasks = dict([(group_id, queue.qsize()) for group_id, queue in
                                     self.factory.proxy.task_dispatcher.group_queue.queue_dict.items()])

                rsp_body = dict(
                    clients=self.factory.proxy.stat_counter.clients,
                    client_req=self.factory.proxy.stat_counter.client_req,
                    client_rsp=self.factory.proxy.stat_counter.client_rsp,
                    worker_req=self.factory.proxy.stat_counter.worker_req_counter,
                    worker_rsp=self.factory.proxy.stat_counter.worker_rsp_counter,
                    workers=workers,
                    idle_workers=idle_workers,
                    busy_workers=busy_workers,
                    pending_tasks=pending_tasks,
                    discard_tasks=self.factory.proxy.stat_counter.discard_tasks_counter,
                    tasks_time=self.factory.proxy.stat_counter.tasks_time_counter,
                )

                rsp = box.map(dict(
                    body=json.dumps(rsp_body)
                ))

            elif box.cmd == constants.CMD_ADMIN_CLEAR:
                jdata = json.loads(box.body)
                if jdata['payload']['all_groups']:
                    self.factory.proxy.task_dispatcher.clear_all_tasks()
                else:
                    for group_id in jdata['payload']['group_list'] or ():
                        self.factory.proxy.task_dispatcher.clear_tasks(group_id)

                rsp = box.map(dict(
                    ret=0
                ))

            elif box.cmd in (
                    constants.CMD_ADMIN_RELOAD,
                    constants.CMD_ADMIN_STOP,
            ):
                if self.factory.proxy.master_conn and self.factory.proxy.master_conn.transport:
                    self.factory.proxy.master_conn.transport.write(box.pack())

                    rsp = box.map(dict(
                        ret=0
                    ))
                else:
                    rsp = box.map(dict(
                        ret=constants.RET_MASTER_NOT_CONNECTED
                    ))

        if rsp:
            self.transport.write(rsp.pack())

