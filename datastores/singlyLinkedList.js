class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // adding at the begging of the list
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return -1;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (node === -1) {
      return false;
    } else {
      node.val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let node = new Node(val);
    let beforeElement = this.get(index - 1);
    //storing the current node at the index to be reppaced
    let element = beforeElement.next;
    beforeElement.next = node;
    node.next = element;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let beforeElement = this.get(index - 1);
    let toBeRemoved = this.get(index); // beforeElement.next
    beforeElement.next = toBeRemoved.next;
    this.length--;
    return toBeRemoved;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("honey");
list.push("missing");
// console.log(list);
// list.pop();
// list.shift();
// list.unshift(123);
// console.log(list.get(2));
// console.log(list.set(2, "mine"));
// list.insert(2, "shamie");
// console.log(list.get(2));
console.log(list.remove(2));

console.log(list);
