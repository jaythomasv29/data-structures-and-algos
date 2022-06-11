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
  } else {
    return n * factorial(n - 1)
  }
}
// 4 * 3 * 2 * 1 


