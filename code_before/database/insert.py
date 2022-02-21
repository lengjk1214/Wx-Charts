import pymssql #引入pymssql模块

'''
authority-权限：
user_id:用户账号    store:存储
telephone:电话    message:短信
'''
def insert_auth(user_id, store, telephone, message):
    connect = pymssql.connect('DESKTOP-AL6D6EB', 'sa', 'ljk224488', 'jiantu') #服务器名,账户,密码,数据库名
    if connect:
        print("连接成功!")
    cursor = connect.cursor()  # 创建一个游标对象,python里的sql语句都要通过cursor来执行
    sql = "insert into authority (user_id, store, telephone, message)values(%s,%s,%s,%s)"
    data = (user_id, store, telephone, message)
    cursor.execute(sql,data)  # 执行sql语句
    connect.commit()  # 提交
    cursor.close()
    connect.close()
    return connect

'''
record-记录：
user_id:用户账号    time:交易时间
money:金额    amount:数量   mothod：交易方式
'''
def insert_record(user_id, time, money, amount, mothod):
    connect = pymssql.connect('DESKTOP-AL6D6EB', 'sa', 'ljk224488', 'jiantu') #服务器名,账户,密码,数据库名
    if connect:
        print("连接成功!")
    cursor = connect.cursor()  # 创建一个游标对象,python里的sql语句都要通过cursor来执行
    sql = "insert into record (user_id, time, money, amount, mothod)values(%s,%s,%s,%d,%s)"
    data = (user_id, time, money, amount, mothod)
    cursor.execute(sql, data)  # 执行sql语句
    connect.commit()  # 提交
    cursor.close()
    connect.close()
    return connect

'''
user-用户信息

'''
def insert_user():
    connect = pymssql.connect('DESKTOP-AL6D6EB', 'sa', 'ljk224488', 'jiantu') #服务器名,账户,密码,数据库名
    if connect:
        print("连接成功!")
    cursor = connect.cursor()  # 创建一个游标对象,python里的sql语句都要通过cursor来执行
    sql = "insert into record (user_id, time, money, amount, mothod)values(%s,%s,%s,%d,%s)"
    data = ()
    cursor.execute(sql, data)  # 执行sql语句
    connect.commit()  # 提交
    cursor.close()
    connect.close()
    return connect
'''
example
user_id="123"
time="2021"
money="13"
amount=13
mothod="微信"
conn = insert_record(user_id, time, money, amount, mothod)
'''
