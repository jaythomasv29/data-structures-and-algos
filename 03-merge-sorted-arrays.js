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
