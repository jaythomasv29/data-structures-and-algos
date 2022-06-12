/**
 * Linear Search:
 * Given an array of 'n' elements and the target element 't', find the index of 't' 
 * in the array. Return -1 if the target element is not found
 * 
 * arr = [-5, 2, 10, 4, 6, t=10] => 2
 * 
 * arr = [-5, 2, 10, 4, 6, t=6] => 4
 * 
 * arr = [-5, 2, 10, 4, 6, t=3] => -1
 * 
 * indexOf()
 * lastIndeOf()
 * 
 * Time Complexity O(n)
 */

function linearSearch(arr, t) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === t) {
      return i
    }
  }
  return -1
}
const arr = [-5, 2, 10, 4, 6] 
console.log(linearSearch(arr, 10)) // 2
console.log(linearSearch(arr, 6)) // 4
console.log(linearSearch(arr, 20)) // -1

