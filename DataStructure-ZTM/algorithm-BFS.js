// Traverse the node label by label
// it uses extra memory therefore there is concern of space coplexity

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root == null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  BreadthFirstSearchIterative() {
    let currentNode = this.root;
    const queue = [currentNode];
    const list = [];
    list.push(this.root.value);
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode.left != null) {
        queue.push(currentNode.left);
        list.push(currentNode.left.value);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
        list.push(currentNode.right.value);
      }
    }

    return list;
  }
}

const tree = new Tree();

tree.insert(10);
tree.insert(17);
tree.insert(9);
tree.insert(16);
tree.insert(7);
tree.insert(13);
tree.insert(2);
tree.insert(27);
tree.insert(5);
tree.insert(4);

console.log(tree);

console.log(tree.BreadthFirstSearchIterative());
