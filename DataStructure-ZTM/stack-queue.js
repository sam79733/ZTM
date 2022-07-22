// Stack- LIFO (LAST IN FIRST OUT)
// Implement Stack by using Linked list

class node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class myStack {
  constructor() {
    (this.top = null), (this.last = null), (this.length = 0);
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new node(value);
    if (this.top == null) {
      this.top = newNode;
      this.last = newNode;
    } else {
      const holdingNode = this.top;
      this.top = newNode;
      this.top.next = holdingNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (this.top == null) {
      return null;
    }
    if (this.top == this.last) {
      this.last = null;
    }

    const holdingNode = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingNode;
  }
}

const mystack = new myStack();
mystack.push(10);
mystack.push(11);
mystack.push(12);
mystack.push(13);
mystack.push(14);

console.log(mystack);

console.log(mystack.pop());

console.log(mystack.peek());
console.log(mystack);

// Queue- FIRST IN FIRST OUT
// Implementing Queue using linked list, that will take O(1) time to enqueue and dequeue
// if we are using array to implement queue, that will cost the performance.
// In case of dequeue - we have to shift the index of array that will cost  O(n)

class Queue {
  constructor() {
    (this.first = null), (this.last = null), (this.length = 0);
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new node(value);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Ele");
myQueue.enqueue("John");
myQueue.enqueue("Nancy");
myQueue.enqueue("Dustin");
myQueue.enqueue("Mike");

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue);
