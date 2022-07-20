// Linked list stores the data in a order
// every node includes value and next node pointer

// e.g: const bastket = ["Apple", "Oranges", "Pears"]
// linked list representation --
// Apple
// 10001--> Oranges
//          10002   --> Pears --> null

// There are few programming language that gives inbuilt linked list.
// Javascript doesn't have linked list but we can implement.

// Append and prepend takes O(1) time.
// lookup , searching, deletion, insertion takes O(n) time..

const linkedList = {
  value: "apple",
  next: {
    value: "Oranges",
    next: {
      value: "Pears",
      next: null,
    },
  },
};

class myLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  prepend(value) {
    let newNode = { value: value, next: null };
    let currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
  }

  printList() {
    let listItem = [];
    let currentNode = this.head;
    while (currentNode) {
      listItem.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return listItem;
  }

  insert(index, value) {
    let newNode = { value: value, next: null };
    let leaderNode = this.getLeaderNode(index - 1);
    let successorNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = successorNode;
    this.length++;
    return this;
  }

  getLeaderNode(index) {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (index == i) {
        return currentNode;
      }
      currentNode = currentNode.next;
      i++;
    }
    return this.tail;
  }
}

const mylist = new myLinkedList(10);
mylist.append(111);
mylist.append(43);
mylist.append(54);
mylist.append(32);
mylist.append(12);
mylist.prepend(110);

console.log(mylist.printList());
mylist.insert(2, 101);
console.log(mylist.printList());
