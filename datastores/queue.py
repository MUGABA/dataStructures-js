class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def enqueue(self, val):
        node = Node(val)
        print(node)
