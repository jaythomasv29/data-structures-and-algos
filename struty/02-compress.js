const compress = (s) => {
  if (!s) return s;
  let result = ''
  // loop through each char in string
  // keep track of repeat
  // when a letter is different, then add to result the total repeat, and current value
  let repeat = 1
  for(let i = 0; i < s.length; i ++) {
    let current = s[i]
    let next = s[i + 1]
    if(current === next) {
      repeat += 1
    } else {
      if(repeat === 1) {
        result += current
      } else {
        result += `${repeat.toString()}${current}`
        repeat = 1
      }
    }
    
    // when we reach the end (i === s.length)
    // concat last letter
  }
  return result
 
};
const str1 = "ccaatsss";

console.log(compress(str1))
console.log(compress('ssssbbz'))
console.log(compress('ppoppppp'))
