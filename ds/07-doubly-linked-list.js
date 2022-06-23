class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  append(value) {
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
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
      console.log(current);
      current = current.next;
    }
  }

  reversePrint() {
    let current = this.tail
    while(current) {
      console.log(current.value)
      current = current.prev
    }
  }
}

const dLinkedList1 = new DoublyLinkedList()
dLinkedList1.append(1)
dLinkedList1.append(2)
dLinkedList1.append(3)
// console.log(dLinkedList1);
dLinkedList1.print()