class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(value) {
    this.length++;
    if (!this.top) {
      this.top = new Node(value);
      this.bottom = this.top
      return this;
    }
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    return this;
  }
  // peek top of the stack
  peek() {
    return this.top;
  }
  pop() {
    if (!this.top || !this.top.next) {
      this.length = 0;
      this.top = null;
      this.bottom = null
      return this;
    }
    this.length--;
    this.top = this.top.next;
    return this;
  }
}

const stack1 = new Stack();
console.log(stack1.push('google'));
console.log(stack1.pop());
// console.log(stack1.push('udemy'));
// console.log(stack1.push('discord'))
// console.log(stack1.peek());
