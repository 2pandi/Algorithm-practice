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
    const node = new Node(val);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  // 내 코드
  // pop() {
  //   if (!this.length) return;
  //   let current = this.head,
  //     popped = this.tail;
  //   if (current === popped) {
  //     this.head = null;
  //   }
  //   while (current.next && current.next !== popped) {
  //     current = current.next;
  //   }
  //   current.next = null;
  //   this.tail = this.head ? current : null;
  //   this.length--;
  //   return popped;
  // }

  // 샘 코드
  pop() {
    if (!this.head) return;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return;
    const shifted = this.head;
    this.head = shifted.next;
    shifted.next = null;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return shifted;
  }

  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // 내 코드
  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    const preNode = this.get(index - 1);
    if (!preNode) return false;
    const node = new Node(val);
    node.next = preNode.next;
    preNode.next = node;
    this.length++;
    return true;
  }

  // 샘 코드
  // insert(index, val) {
  //   if (index < 0 || index > this.length) return false;
  //   if (index === this.length) return !!this.push(val);
  //   if (index === 0) return !!this.unshift(val);

  //   const newNode = new Node(val);
  //   const prev = this.get(index - 1);
  //   const temp = prev.next;
  //   prev.next = newNode;
  //   newNode.next = temp;
  //   this.length++;
  //   return true;
  // }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const preNode = this.get(index - 1);
    if (!preNode) return null;
    const removed = preNode.next;
    preNode.next = removed.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  // 샘 코드
  // remove(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   if (index === 0) return this.shift();
  //   if (index === this.length - 1) return this.pop();
  //   const prev = this.get(index - 1);
  //   const removed = prev.next;
  //   prev.next = removed.next;
  //   this.length--;
  //   return removed;
  // }

  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null,
      next;
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
list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");

// Big O(시간복잡도)
// Insertion: O(1)
// Removal: shift - O(1) or pop - O(N)
// Searching: O(N)
// Access: O(N)
