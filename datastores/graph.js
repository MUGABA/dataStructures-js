class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(x => x !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(x => x !== v1);
  }
  removeVertex(vertex) {
    if (!vertex in this.adjacencyList) return;
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive(startVertex) {
    let dataStore = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      dataStore.push(vertex);
      for (let v of adjacencyList[vertex]) {
        if (!(v in visited)) dfs(v);
      }
    }
    dfs(startVertex);
    return dataStore;
  }
  DFSIterative(startVertex) {
    let storeVertices = [];
    let stack = [startVertex];
    const visited = {};
    visited[startVertex] = true;
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      storeVertices.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return storeVertices;
  }
  breadthFirstSearch(startVertex) {
    let storeVertices = [];
    let queue = [startVertex];
    const visited = {};
    visited[startVertex] = true;
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      storeVertices.push(vertex);
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return storeVertices;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.breadthFirstSearch("A"));
