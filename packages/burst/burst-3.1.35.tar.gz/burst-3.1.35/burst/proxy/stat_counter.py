from collections import defaultdict


class StatCounter(object):

    """
    统计计算类
    """

    # 客户端连接数
    clients = 0
    # 客户端请求数
    client_req = 0
    # 客户端回应数
    client_rsp = 0
    # worker请求数
    worker_req_counter = None
    # worker回应数
    worker_rsp_counter = None
    # 任务丢弃统计
    discard_tasks_counter = None
    # 任务完成时间统计
    tasks_time_counter = None
    # 任务时间统计标准
    tasks_time_benchmark = None

    def __init__(self, tasks_time_benchmark):
        self.worker_req_counter = defaultdict(int)
        self.worker_rsp_counter = defaultdict(int)
        self.discard_tasks_counter = defaultdict(int)
        self.tasks_time_counter = defaultdict(int)
        self.tasks_time_benchmark = tasks_time_benchmark

    def add_worker_req(self, group_id):
        self.worker_req_counter[group_id] += 1

    def add_worker_rsp(self, group_id):
        self.worker_rsp_counter[group_id] += 1

    def add_discard_task(self, group_id):
        self.discard_tasks_counter[group_id] += 1

    def add_task_time(self, task_time):
        """
        添加一个新的时间
        :param task_time:
        :return:
        """

        def trans_to_counter_value(value):
            """
            把时间计算为一个可以统计分布的数值
            :return:
            """

            for dst_value in self.tasks_time_benchmark:
                if value < dst_value:
                    return dst_value
            else:
                return 'more'

        counter_value = trans_to_counter_value(task_time)
        self.tasks_time_counter[counter_value] += 1
