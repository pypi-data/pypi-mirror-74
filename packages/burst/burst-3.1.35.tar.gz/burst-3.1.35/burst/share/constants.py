
NAME = 'burst'

# 系统返回码
# 命令字不合法
RET_INVALID_CMD = -10000
# 系统内部异常
RET_INTERNAL = -10001
# admin用户验证失败
RET_ADMIN_AUTH_FAIL = -20000
# master连接未连接
RET_MASTER_NOT_CONNECTED = -21000

# 内部使用的命令字
# 分配任务.
CMD_WORKER_TASK_ASSIGN = 100
# 任务完成. 如果body里面带数据，说明是要写回；如果没有数据，说明只是要求分配task
CMD_WORKER_TASK_DONE = 200

# 管理员命令
# 获取运行状态统计
CMD_ADMIN_SERVER_STAT = 20000

# 优雅重启workers
CMD_ADMIN_RELOAD = 21001
# 停止整个server
CMD_ADMIN_STOP = 21003
# 清空某个或者多个分组的消息
CMD_ADMIN_CLEAR = 21004

# worker的状态
WORKER_STATUS_IDLE = 1
WORKER_STATUS_BUSY = 2

# 进程类型
PROC_TYPE_MASTER = 'master'
PROC_TYPE_PROXY = 'proxy'
PROC_TYPE_LOADER = 'loader'
PROC_TYPE_WORKER = 'worker'


# reload状态
RELOAD_STATUS_STOPPED = 0
RELOAD_STATUS_PREPARING = 1      # 准备中
RELOAD_STATUS_WORKERS_DONE = 2   # 已经准备好了


# 默认配置
DEFAULT_CONFIG = dict(
    # 监听IP
    HOST='127.0.0.1',
    # 监听端口
    PORT=9900,

    # 监听TCP
    TCP=True,

    # 监听UDP
    UDP=False,

    # 进程名
    NAME=NAME,

    # 是否调试模式
    DEBUG=False,

    # box class
    BOX_CLASS='netkit.box.Box',

    # master class
    MASTER_CLASS='burst.master.Master',

    # proxy class
    PROXY_CLASS='burst.proxy.Proxy',

    # loader class
    LOADER_CLASS='burst.loader.Loader',

    # worker class
    WORKER_CLASS='burst.worker.Worker',

    # request class
    REQUEST_CLASS='burst.worker.Request',

    # 启动的group列表。group_id必须为数字
    GROUP_LIST=[dict(id=1, count=1)],

    # 通过box路由group_id
    GROUP_ROUTER=lambda box: 1,

    # 停止子进程超时(秒). 使用 TERM 进行停止时，如果超时未停止会发送KILL信号
    STOP_TIMEOUT=None,

    # 进程间通信存储目录
    IPC_ADDRESS_DIRECTORY='socks',

    # master<->worker之间通信的address
    MASTER_ADDRESS='master.sock',

    # proxy<->worker之间通信的address模板
    WORKER_ADDRESS_TPL='%s.sock',

    # proxy的backlog
    PROXY_BACKLOG=256,
    # proxy的客户端连接超时
    PROXY_CLIENT_TIMEOUT=None,
    # proxy的每个分组的消息队列的最大长度, <=0 代表无限
    PROXY_MSG_QUEUE_MAX_SIZE=-1,

    # worker<->proxy网络连接超时(秒), 包括 connect once，read once，write once. None 代表不超时
    WORKER_CONN_TIMEOUT=None,
    # 处理task超时(秒). 超过后worker会自杀. None 代表永不超时
    WORKER_WORK_TIMEOUT=None,
    # worker重连等待时间
    WORKER_RECONNECT_INTERVAL=1,
    # 当失败时，是否自动响应
    WORKER_AUTO_RSP_ON_FAIL=True,

    # 子进程标识进程类型的环境变量
    CHILD_PROCESS_ENV_KEY='BURST_ENV',

    # 管理员，可以连接proxy获取数据
    # 管理员访问地址: 'admin.sock' or ('127.0.0.1', 9910)
    ADMIN_ADDRESS='admin.sock',
    ADMIN_USERNAME=None,
    ADMIN_PASSWORD=None,

    # 统计相关
    # 作业时间统计标准
    TASKS_TIME_BENCHMARK=(10, 50, 100, 500, 1000, 5000),
)
