const uncompress = (s) => {
  // todo
  let uncompressed = ''
  let number = ''
  
  for(let i = 0; i < s.length; i++) {
    let char = s[i];
    if(Number.isInteger(Number(char))) {
      number += char
    } else {
      // when we hit a letter it is time to calculate
      let letters = char.repeat(Number(number))
      console.log(number, letters)
      uncompressed += letters
      number = ''
    }
  }
  // console.log(uncompressed)
  return uncompressed
};
console.log(uncompress("10a"))
console.log(uncompress("4s2b"))
console.log(uncompress("2c3a1t"))
console.log(uncompress("2p1o5p"))