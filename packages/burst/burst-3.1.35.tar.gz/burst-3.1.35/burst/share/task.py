
from netkit.box import Box
from collections import OrderedDict

# 如果header字段变化，那么格式也会变化
HEADER_ATTRS = OrderedDict([
    ('magic', ('i', 2037952207)),
    ('version', ('h', 0)),
    ('flags', ('h', 0)),
    ('packet_len', ('i', 0)),
    ('cmd', ('i', 0)),
    ('client_ip_num', ('16s', b'')),
    ])


# 是否IPV6
FLAG_IPV6 = 0x01


class Task(Box):
    header_attrs = HEADER_ATTRS

    @property
    def ipv6(self):
        """
        是否是ipv6
        :return: True/False
        """
        return bool(self.flags & FLAG_IPV6)

    @ipv6.setter
    def ipv6(self, value):
        if value:
            self.flags |= FLAG_IPV6
        else:
            self.flags &= (~FLAG_IPV6)

    @property
    def client_ip(self):
        """
        获取字符串格式的IP地址
        对端传过来的本身就是原始的字节序的二进制流，所以不需要做任何特殊转化，直接使用即可。
        :return:
        """
        import socket
        if self.ipv6:
            return socket.inet_ntop(socket.AF_INET6, self.client_ip_num)
        else:
            # ipv4只有4个字节
            return socket.inet_ntop(socket.AF_INET, self.client_ip_num[:4])
