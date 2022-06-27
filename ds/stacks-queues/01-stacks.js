/**
 *  Stack - a stack of books (Last in First Out)
 *  Browser Back button - Gets most recent site visited
 *
 * Functions of Stack:
 *  Push(), - add to back of stack
 *  Pop(), - remove most recent element in stack
 *  Peek() - view the most recent element in stack,
 * length - the total length
 *
 * In JS, an Array can be a stack
 * */

const isPalinedrone = (word) => {
  const letters = []; // put letters of word into stack
  let reversedWord = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    reversedWord += letters.pop();
  }

  return reversedWord === word ? true : false;
};

// console.log(isPalinedrone("racecar"));

var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

const s1 = new Stack();
s1.push(1)
s1.push(2)
console.log(s1.peek())
console.log(s1.pop())
console.log(s1.peek());
