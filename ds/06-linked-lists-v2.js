class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  // Empty Linked List will not be formed.
  constructor() {
   this.head = null
   this.tail = null
  }

  prepend(value) {
    const newHead = new Node(value)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    newHead.next = this.head  // current head is now the .next of newHead
    this.head = newHead   // set to head property

  }

  append(value) {
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    this.tail.next = newNode
    this.tail = newNode
  }


  find(value) {
    let current = this.head
    while(current) {
      // console.log(current.value)
      if(current.value == value) return true
      current = current.next
    }
    return false
  }



  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  // rPrint() {
  //   if (!node) return;
  //   console.log(node.value);
  // return this.rPrint(node.next);
  // }
}

const history = new LinkedList()
history.append(1)
history.append(2)
history.append(3)
history.append(4)
history.prepend(0)
console.log(history)

history.print()



