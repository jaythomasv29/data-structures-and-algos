/**
 * Power of Two: Given a positive integer 'n' determine if the number is a power of 2 or not
 */

function isPowerOfTwo(n) {
  if (n < 1) return null;
  for (let i = 0; i < n; i++) if (2 ** i === n) return true;

  return false;
}

console.log(isPowerOfTwo(1125899906842624));
