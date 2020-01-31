class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.val === value) return undefined;
      // checking whether the value is less than the node
      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        // checking whether the vale is greater than then the value
      } else if (value > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.val) current = current.left;
      else if (value > current.val) current = current.right;
      else found = true;
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.val) current = current.left;
      else if (value > current.val) current = current.right;
      else return true;
    }
    return false;
  }
  bfs() {
    // breadth first search
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  dfsPreOrder() {
    //{depth first search pre order
    let current = this.root,
      data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  dfsPostOrder() {
    // depth first search post order
    let current = this.root,
      data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(current);
    return data;
  }
  dfsInOrder() {
    // depth first search in order
    let current = this.root,
      data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

const bst = new BST();
bst.insert(15);
bst.insert(10);
bst.insert(7);
bst.insert(20);
bst.insert(11);
bst.insert(6);
bst.insert(18);
bst.insert(21);
// console.log(bst.find(21));
// console.log(bst.contains(21));
console.log(bst.bfs());
[15, 10, 20, 7, 11, 18, 21, 6];
console.log(bst.dfsPreOrder());
[15, 10, 7, 6, 11, 20, 18, 21];
console.log(bst.dfsPostOrder());
[6, 7, 11, 10, 18, 21, 20, 15];
console.log(bst.dfsInOrder());
[6, 7, 10, 11, 15, 18, 20, 21];

// console.log(bst);
