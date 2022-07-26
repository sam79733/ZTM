// BST is tree based data structure that can have one root node and 0, 1 or 2 child node
// It takes O(logn) time for LookUp, Insert, Delete and quite faster than  O(n).
// BST is Ordered and flexible in size.

// Implementation

class Node {
  constructor(value) {
    (this.value = value), (this.left = null), (this.right = null);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value >= currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }

  lookUp(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value == value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(15);
tree.insert(21);
tree.insert(1);
tree.insert(11);
console.log(tree);

console.log(tree.lookUp(15));
console.log(tree.lookUp(17));
