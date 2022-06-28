const mostFrequentChar = (s) => {
  // todo
  // have a count hash table to iterate through 's' and keep count
  // have a mostFrequent set to 0
  // iterate through starting at index 0
  
  // before end of iteration check if mostFrequent value < current key/value being counted
    // if so set the new 'mostFrequent' variable as current
  const count = { }
  let mostFrequent = s[0]
  for(let i = 0; i < s.length; i++) {
    const currentChar = s[i]
    currentChar in count ? count[currentChar] += 1 : count[currentChar] = 1
  }    
  for(key in count) {
    if(count[mostFrequent] < count[key]){
      mostFrequent = key
    }
  }
  return mostFrequent
};

console.log(mostFrequentChar('potato')); // -> 'o'
