/**
 *
 * Queues - First in First Out Data Structure
 * Ex: A line, A print queue, a waiting list
 *
 */

function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var q = new Queue()
q.enqueue('James')
q.enqueue('Alan')
q.enqueue('Marco')
q.enqueue('Penelope')
console.log(q.front())
q.dequeue()
q.print()