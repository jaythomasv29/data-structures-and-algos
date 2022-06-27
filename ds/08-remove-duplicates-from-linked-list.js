// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList.head
  let next = current.next
  while (current) {
    if(current.value === next.value) {
      current.next = null
    } else {
      current.next = next
    }
    current = current.next
  }
  return linkedList;
}
