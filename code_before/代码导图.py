from pycallgraph import PyCallGraph
from pycallgraph.output import GraphvizOutput
'''
函数关系图:
name:保存名字+格式    function:需要调用的函数
只能读取一个function函数
'''
def function_structure(name, function):
    graphviz = GraphvizOutput()
    graphviz.output_file = name
    with PyCallGraph(output=graphviz):
        temp = function()

'''
function_structure example
class Banana:
    def eat(self):
        pass
class Person:
    def __init__(self):
        self.no_bananas()
    def no_bananas(self):
        self.bananas = []
    def add_banana(self, banana):
        self.bananas.append(banana)
    def eat_bananas(self):
        [banana.eat() for banana in self.bananas]
        self.no_bananas()
name = "example.jpg"
function = Person
function_structure(name, function)
'''

class A(object):
    def a(self):
        pass

class B(A):
    def b(self):
        pass

class C(A):
    def c(self):
        pass








