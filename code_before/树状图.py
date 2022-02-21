import numpy as np
from graphviz import Digraph, nohtml

'''
树状图:
name:名称     format:保存的格式
point:节点        order:顺序，四维数组
'''
def tree_chart(name,format,point,order):
    dot = Digraph(name=name, format=format)
    dot.attr('node', shape='record')
    for i in range(len(point)):
        dot.node(str(point[i]), nohtml('<f0> |<f1> '+point[i]+'|<f2>'))
    for j in range(len(order)):
        dot.edge(order[j, 0]+':f'+order[j, 1], order[j, 2]+':f'+order[j, 3])
    dot.view()

'''
tree_chart example
name = "example"
format = "pdf"
point = ['A', 'B', 'C', 'D', 'E', 'F']
order = [['A', '0', 'B', '1'], ['A', '2', 'C', '1'], ['B', '2', 'D', '1'], ['C', '0', 'E', '1'], ['C', '2', 'F', '1']]
order = np.array(order)
tree_chart(name, format, point, order)
'''
name = "example"
format = "pdf"
point = ['A', 'B', 'C', 'D', 'E', 'F']
order = [['A', '0', 'B', '1'], ['A', '2', 'C', '1'], ['B', '2', 'D', '1'], ['C', '0', 'E', '1'], ['C', '2', 'F', '1']]
order = np.array(order)
tree_chart(name, format, point, order)

