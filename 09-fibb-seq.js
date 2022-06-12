/**
 * Fibonacci sequence: The sum of two preceding ones
 * fib(7) = 0, 1, 1, 2, 3, 5, 8,
 *
 */

function fibonacci(n) {
  if (n <= 0) return null;
  if (n === 1) return 0;
  if (n === 2) return [0, 1];
  if (n > 2) {
    let base = [0, 1];
    while (base.length !== n) {
      let rear = base[base.length - 1];
      let secondRear = base[base.length - 2];
      base.push(rear + secondRear);
    }
    return base;
  }
}

// Big-O = O(n) 
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))
