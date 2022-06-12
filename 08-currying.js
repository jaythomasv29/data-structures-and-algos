/** Transforms a function with multiple arguments into a sequence of nesting functions that take one argument at a time 
 * 
 * function f(a,b,c) transformed to: f(a)(b)(c)
*/

function sum(a, b, c) {
  return a + b + c
}

console.log(sum(1,2,3))

function curry(fn) {
  return function(a) {
    return function(b) {
      return function (c) {
        return fn(a, b, c)
      }
    }
  }
}
const curriedSum = curry(sum)
console.log(curriedSum(2)(3)(5))