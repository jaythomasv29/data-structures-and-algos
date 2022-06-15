/** Linked Lists
 *
 * An ordered sequence of nodes. Each node consists of a data value and a pointer to the next node
 *
 * nodes, head, tail
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null; // First element
    this.tail = null; // Last element
  }

  prepend(value) {
    const newNode =  new Node(value)
    newNode.next = this.head ;
    if (!this.tail) {
      this.tail = newNode
    }
    this.head = newNode;
    
  }

  append(value) {
    const newNode =  new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode
      return
    }
      this.tail.next = newNode
      this.tail = newNode;


  }

  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current);
      current = current.next;
    }
    return elements;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  rPrint(node) {
    if (!node) return  // base case to exit recursion call
      console.log(node);
      this.rPrint(node.next);  
  }
}

const linkedList1 = new LinkedList();

linkedList1.prepend(2);
linkedList1.append(4);
linkedList1.append(5);
// linkedList1.append(6);
// linkedList1.append('a')
// linkedList1.append('b')
// linkedList1.append('c')
// linkedList1.append('d')

// console.log(linkedList1);
linkedList1.rPrint(linkedList1.head);
// console.log(linkedList1.toArray())
