/** Binary Search Tree */

// Node in the tree
class Node {
  consotructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          node.left = new
        }
      }
    }
  }
}