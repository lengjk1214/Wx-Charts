from graphviz import Digraph
import numpy as np
'''
流程图:
name:流程图名称     format:保存的格式
point:节点        order:顺序，二维数组
judge:菱形，判断
'''
def flow_chart(name,format,point,judge,order):
    dot = Digraph(name=name,format=format)
    dot.attr('node', shape='box')
    for i in range(len(point)):
        dot.node(str(point[i]), point[i])
    dot.attr('node', shape='diamond')
    for i in range(len(judge)):
        dot.node(str(judge[i]), judge[i])
    for j in range(len(order)):
        dot.edge(order[j, 0], order[j, 1])
    dot.view()

'''
flow_chart example
name = "example"
format = "pdf"
point = ['point1', 'point3']
judge = ['point2']
order = [['point1', 'point2'], ['point2', 'point3']]
order = np.array(order)
flow_chart(name, format, point, judge, order)
'''


'''
思维导图:
name:思维导图名称     format:保存的格式
root:根节点
point:子节点        order:顺序
'''
def mind_chart(name,format,root,point,order):
    dot = Digraph(name=name,format=format)
    dot.attr(rankdir='LR', size='8,5')
    dot.node('0', root, shape='box')
    for i in range(len(point)):
        dot.node(str(i), point[i])
    for j in range(len(order)):
        dot.edge(order[j, 0], order[j, 1])
    dot.view()

'''
mind_chart example
name = "example"
format = "pdf"
root = "root"
point = ['point1', 'point2', 'point3']
order = [['point1', 'point2'], ['point2', 'point3']]
mind_chart(name, format, root, point, order)
'''
