/**
 * 
 * Prime : Given a natural number n determine if the nunmber is prime or not
 */

function isPrime(n) {
  for(let i = 2; i < n; i++) {
    if(n % i === 0) return false
  }
  return true
}

console.log(isPrime(5))
console.log(isPrime(13))
console.log(isPrime(24))
console.log(isPrime(67))