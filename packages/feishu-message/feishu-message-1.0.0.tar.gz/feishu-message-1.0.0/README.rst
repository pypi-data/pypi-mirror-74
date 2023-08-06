（一）feishu-message 模块使用方法
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    **``(一)：安装``**

-  从 PYPI 安装

::

    pip install -U  feishu-message

-  从 Github 安装

::

    pip install git+https://github.com/yinhuanyi/feishu-message.git

    **``(二)：使用方法``**

::

    from feishu_message import FeishuMessage

    if __name__ == '__main__':
        feishu = FeishuMessage('13970236750', 'cli_9f9b87ccdsc970d00b', 'SVWv3GtMxkVlPgo0feOsdsUhyA728025qnf')

        feishu.send_message('工单类型+工单ID', '工单基本内容', 'http://10.102.0.14:8000/')

欢迎提交PR
==========
