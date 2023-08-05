# python3.7
# encoding: utf-8
"""
@author: Chenjin.Qian
@email:  chenjin.qian@xquant.com
@file:   tests.py
@time:   2020-07-10 13:29
"""
from exception_sms import GetNotification
from exception_sms.send_email_module import SendMail

sender = SendMail(
    "jingxuan@lynchow.com",
    "qian2617..com",
    "qian_chen_jin@lynchow.com",
    "jin",
    "Exception Notification",
    "There is a exception.",
    "smtp.lynchow.com",
    ["chenjin.qian@xquant.com", "qian_chen_jin@163.com"],
    ["jin", "jin1"],
    file=r"D:\test\logs\20200714\email_log.log"
)

logs = GetNotification(
    "HGBjkUdjqKegADBDmVvTkmf2_dTEIJawM39um0MI",
    "I2Lj4zNysPkpme6HCrEzkymkkP8rzjH-bHfeP2l7",
    "1281023854495416320",
    "Jingxuan",
    "18606511719",
    r"D:\test\logs",
    mail=sender,
    local=r"D:\github\exception-sms\tests.py"
)


@logs.exce_note
def tes(x, y):
    a = x / y
    return a


if __name__ == '__main__':
    b = tes(0, 0)
    print(b)
