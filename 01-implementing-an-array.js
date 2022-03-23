class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data[this.length - 1];
  }
  delete(idx) {
    delete this.data[idx];
    this.shiftItems(idx);
  }
  shiftItems(idx) {
    debugger;
    for (let i = idx; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hello");
// console.log(newArray);
newArray.push("world");
newArray.push("!");
newArray.delete(1);
console.log(newArray);
