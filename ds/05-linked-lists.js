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

  sum() {
    let sum = 0
    let current = this.head;
    while(current) {
      sum += current.value
      current = current.next
    }
    return sum
  }

  rSum(head) {
    if(head === null) return 0
    return head.value += this.rSum(head.next)
  }

  find(target) {
    let current = this.head
    while(current) {
      if (current.value === target) return true
      current = current.next
    }
    return false
  }

  rFind(head, target) {
    if (head === null) return false
    if (head.value === target) return true
    return this.rFind(head.next, target)
  }

  getIndex(idx) {
    let position = 0
    let current = this.head
    while(current) {
      if(position === idx) return current.value
      position++
      current = current.next
    }
    return null
  }

  rGetIndex(head, idx) {
    if (head === null) return null
    if (idx === 0) return head.value
    return this.rGetIndex(head.next, idx - 1)
  }

  reverse() {
    let prev = null //null,  1, 2
    let next = null //null, 2 // 3
    let current = this.head
    this.tail = current  // 1

    while(current) {  // LL: [1]<-[2]<-[3]<-[4]
      next = current.next  //null,  2, 3, 4, null
      current.next = prev  // null, 1, 2, 3
      prev = current // 1, 2, 3, 4
      current = next // 1, 2, 3, 4, null
    }
    this.head = prev
    return this
  }
  
}

const linkedList1 = new LinkedList();

linkedList1.prepend(2);
linkedList1.append(4);
linkedList1.append(5);
linkedList1.append(6);
linkedList1.append('a')
linkedList1.append('b')
linkedList1.append('c')
linkedList1.append('d')

// console.log(linkedList1);
// linkedList1.rPrint(linkedList1.head);
// console.log(linkedList1.toArray())

// console.log(linkedList1.sum())
// console.log('recursively', linkedList1.rSum(linkedList1.head))
// console.log(linkedList1.rFind(linkedList1.head, 'd'))
// console.log(linkedList1.rGetIndex(linkedList1.head, 7))
console.log((linkedList1.reverse().toArray()));