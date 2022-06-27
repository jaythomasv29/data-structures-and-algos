/** Binary Search Tree */

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

  // insert(value) {
  //   const newNode = new Node(value);
  //   if (!this.root) {
  //     this.root = new Node(value);
  //     return this;
  //   }

  //   let current = this.root;
  //   while (current) {
  //     if (value === current.value) return undefined; // BST cannot have duplicate values
  //     // handle letter values traverse
  //     if (value < current.value) {
  //       if (current.left === null) {
  //         current.left = newNode;
  //         return this;
  //       }
  //       current = current.left;
  //     } else {
  //       // handle greater values traverse
  //       if (current.right === null) {
  //         current.right = newNode;
  //         return this;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }

  insert(value) {
    const newNode = new Node(value);
    //case: if there is no root in LL
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      // case: where the value already exists in the tree
      if (value === current.value) return undefined;

      // traverse left (numbers less than current)
      if (value < current.value) {
        // case: when we find that the left has an empty slot
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // traverse right (number greater than current)
        // case: when we find that the right has an empty slot
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  lookup(value) {
    if(!this.root) return false
    let current = this.root
    while(current) {
      // traverse left if less
      if(value < current.value) {
        current = current.left
      } else if (value > current.value) {
        // traverse right
        current = current.right
      }
      else if(current.value === value) {
        return current
      }
    } 
    return false
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(12))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
