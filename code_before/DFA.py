import numpy as np
from graphviz import Digraph
'''
DFA:
name:名称     format:保存的格式
point:节点    end_point:结束节点    order:顺序，三维数组
'''
def DFA(name,format,point,end_point,order):
    dot = Digraph(name=name, format=format)
    dot.attr(rankdir='LR')
    dot.attr('node', shape='circle')
    for i in range(len(point)):
        dot.node(str(point[i]), point[i])
    dot.attr('node', shape='doublecircle')
    for i in range(len(end_point)):
        dot.node(str(end_point[i]), end_point[i])
    for j in range(len(order)):
        dot.edge(order[j, 0], order[j, 1], label=order[j, 2])
    dot.view()

'''
tree_chart example
name = "example"
format = "pdf"
point = ['A', 'B', 'C', 'D']
end_point = ['E']
order = [['A', 'B', 's=s+1'], ['B', 'C', 'sum = 0'], ['B', 'B', 'i<2'], ['C', 'D', ''], ['D', 'C', ''], ['C', 'E', '']]
order = np.array(order)
DFA(name, format, point, end_point, order)
'''


