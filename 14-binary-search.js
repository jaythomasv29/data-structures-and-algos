/**
 * Binary search
 * Given a sorted array of 'n' elements and a target element 't', find the next index of 't' in the array. Return -1 if the target element is not found
 * Must be a sorted arr
 *
 * arr = [-5, 2, 4, 6, 10], t = 10 => 4
 *
 * arr = [-5, 2, 4, 6, 10], t = 6 => 3
 *
 * arr = [-5, 2, 4, 6, 10], t = 20 => -1
 */

/**
 * find the middle element in the array
 * begin binary search based on middle element value
 */

function binarySearch(arr, t) {
  const firstHalf = arr.splice(0, arr.length / 2);
  
  if (firstHalf[firstHalf.length - 1] === t) return firstHalf.length - 1;
  if (firstHalf[firstHalf.length - 1] > t) {
    for (let i = 0; i < firstHalf.length; i++) {
      if (firstHalf[i] === t) return i;
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === t) return i + firstHalf.length;

    }
  }
  return -1;
}


const arr = [-5, 2, 4, 6, 10]

console.log(binarySearch(arr, 10))
console.log(binarySearch(arr, 10))
console.log(binarySearch(arr, 10))