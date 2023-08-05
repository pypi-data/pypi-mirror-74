
from twisted.internet.protocol import DatagramProtocol

from ...share.utils import safe_call, ip_str_to_bin
from ...share.log import logger
from ..task_container import TaskContainer
from ...share.task import Task
from ...share import constants


class ClientConnectionFactory(DatagramProtocol):

    def __init__(self, proxy):
        self.proxy = proxy

    def datagramReceived(self, data, address):
        # address: type: tuple, format: ('127.0.0.1', 62043)

        while data:
            box = self.proxy.app.box_class()
            ret = box.unpack(data)

            if ret == 0:
                # 说明要继续收
                logger.error('buffer incomplete. proxy: %s, ret: %d, read_buffer: %r',
                             self.proxy, ret, data)
                return
            elif ret > 0:
                # 收好了
                # 不能使用双下划线，会导致别的地方取的时候变为 _Gateway__raw_data，很奇怪
                box._raw_data = data[:ret]
                data = data[ret:]
                safe_call(self._on_read_complete, box, address)
                continue
            else:
                # 数据已经混乱了，全部丢弃
                logger.error('buffer invalid. proxy: %s, ret: %d, read_buffer: %r',
                             self.proxy, ret, data)
                data = b''
                return

    def write(self, data, address):
        if self.transport:
            # 要求连接存在
            self.transport.write(data, address)
            self.proxy.stat_counter.client_rsp += 1

            return True

        return False

    def _on_read_complete(self, box, address):
        self.proxy.stat_counter.client_req += 1

        # 获取映射的group_id
        group_id = self.proxy.app.config['GROUP_ROUTER'](box)
        if group_id not in self.proxy.app.group_id_set:
            logger.error('invalid group_id. group_id: %s', group_id)
            return

        client_ip_num, ipv6 = ip_str_to_bin(address[0])

        # 打包成内部通信的task
        task = Task(dict(
            cmd=constants.CMD_WORKER_TASK_ASSIGN,
            client_ip_num=client_ip_num,
            ipv6=ipv6,
            body=box._raw_data,
        ))

        conn = ClientConnection(self, address)

        task_container = TaskContainer(task, conn)
        self.proxy.task_dispatcher.add_task(group_id, task_container)


class ClientConnection(object):

    factory = None
    address = None

    def __init__(self, factory, address):
        self.factory = factory
        self.address = address

    def write(self, data):
        return self.factory.write(data, self.address)
