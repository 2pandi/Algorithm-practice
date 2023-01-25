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
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("!");
