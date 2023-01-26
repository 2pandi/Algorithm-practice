class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // 전위 탐색
  // [10, 5, 2, 7, 13, 11, 16]
  DFSPreOrder() {
    let current = this.root,
      data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }

  // 후위 탐색
  // [2, 7, 5, 11, 16, 13, 10]
  DFSPostOrder() {
    let current = this.root,
      data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  // 정위 탐색
  // [2, 5, 7, 10, 11, 13, 16]
  DFSInOrder() {
    let current = this.root,
      data = [];
    function traverse(node) {
      node.left && traverse(node.left); // if문을 &&연산자로 대체 가능
      data.push(node.value);
      node.right && traverse(node.right);
    }
    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
// tree.find(5);
// tree.contains(5);

/**
 *      10
 *   5      13
 * 2   7  11  16
 */

/** BFS와 DFS
 * BFS와 DFS 모두 모든 노드를 한번씩 방문하는 것이므로 시간복잡도는 동일하다.
 * 하지만 트리의 구조에 따라 공간복잡도가 달라질 수 있다.
 * 너비가 넓은 트리는 DFS가, 깊이가 깊은 트리는 BFS가 공간복잡도 측면에서 유리할 수 있다.
 */

/** 전위, 후위, 정위 탐색
 * 이진검색트리로 한정하여 봤을 때
 * 정위 탐색으로 순회하면 오름차순으로 정렬된다.
 * 전위 탐색으로 순회하면 트리를 복사하거나 평탄화하여 저장해놓고 나중에 다시 연쇄구조로 만들기 수월할 수 있다.(맨 앞이 root)
 */
