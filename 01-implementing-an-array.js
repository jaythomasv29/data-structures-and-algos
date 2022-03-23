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

// Create a function that reverses a string:
//'Hi my name is James.'
//'!semaJ si eman ym iH'

function reverse(str) {
  //check input, edge case
  if (!str || str.length < 2 || typeof str !== "string") return "error";
  // have a result string
  let result = "";
  //loop through string and from end to front and concat result string
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  // return the result string
  return result;
}

console.log(reverse("Hi my name is James."));

// Merge sorted arrays
const arr1 = [];
const arr2 = [4, 6, 30];
function mergeSortedArrays(arr1, arr2) {
  //edge cases
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  const mergeLength = arr1.length + arr2.length;
  // sorted [0, 3, 4, 4, 6, 30, 31]
  const sorted = [];
  // have indexes stored for both arrays
  // while elements exist as we pass through the arrays
  // and check which one is less, and push to sorted[]
  // whichever array moves we increment the index and check until reached end
  let idx2 = 0;
  let idx1 = 0;
  while (sorted.length < mergeLength) {
    // if first element in arr1 is less than
    if (arr2[idx2] === undefined || arr1[idx1] < arr2[idx2]) {
      sorted.push(arr1[idx1]);
      idx1++;
    } else if (arr1[idx1] === arr2[idx2]) {
      sorted.push(arr2[idx2], arr1[idx1]);
      idx1++;
      idx2++;
    } else {
      sorted.push(arr2[idx2]);
      idx2++;
    }
  }
  return sorted;
}

console.log(mergeSortedArrays(arr1, arr2));
