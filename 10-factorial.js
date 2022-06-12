function factorial(n) {
  let result = 1
  if(n === 1 || n === 0) return result
  if(n < 0) return null

  let i = 1
  while (i <= n) {
    result *= i
    i++
  }
  return result
}
console.log(factorial(5))