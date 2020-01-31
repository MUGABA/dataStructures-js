class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head || this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    const middle = Math.floor(this.length / 2);

    if (index < 0 || index >= this.length) return undefined;

    let count = 0;
    let current = this.head;
    if (index <= middle) {
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail.prev;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, value) {
    const node = this.get(index);
    if (node != null) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    const node = new Node(value);
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.unshift(value);
    if (this.length === index) return !!this.push(value);
    // before node to update
    const beforeNode = this.get(index - 1);
    if (beforeNode != null) {
      node.next = beforeNode.next;
      beforeNode.next.prev = node;
      node.prev = beforeNode;
      return true;
    }
    this.length++;
    return false;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const node = this.get(index);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;

    this.length--;
    return node;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
// list.pop();
list.push(3);
list.push(4);
list.push(5);
list.insert(2, 8);
console.log(list.remove(2));

// list.shift();
// list.unshift(1);
// console.log(list.get(4));
// console.log(list);
