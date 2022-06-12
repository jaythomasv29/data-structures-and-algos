/**
 * 
 * A function that calls itself over until it reaches a stopping condition
 * 
 * Contains: 
 * 1) base case (stopping condition)
 * 3) Recursive call to itself
 * 
 * 
 * Ex: Factorial using recursion
 * 4! = 4 * 3 * 2 * 1
 * 
 */
function factorial(n) {
  if(n === 1 || n === 0){
    return 1 
  } 
    return n * factorial(n - 1)
}

console.log(factorial(4))

// 4 * 3 * 2 * 1 

// [0, 1, 1, 2, 3, 5, 8, 13, 21]
function rFibonacci(n) {
  if(n < 0) return null
  if( n < 2 ) return n
  return rFibonacci(n-1) + rFibonacci(n-2)
}

// console.log(rFibonacci(6))

function rReverseString(str) {
  let result = ''
  if(str.length === 0) return str
  
}