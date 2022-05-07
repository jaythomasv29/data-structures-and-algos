const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, -1]



function isValidSubsequence(arr, sequence) {
  // if the sequence is longer than the array, then it fails automatically
  if(sequence.length > arr.length) return false;
  // every item in the sequence MUST be in the array
  const isEveryNumSequenceInArray = sequence.every((num, idx) => {
    arr.splice(arr.indexOf(sequence[idx]), 1, 'x')
    return arr.includes(num)
  })
  console.log('after splice', arr);

  if(!isEveryNumSequenceInArray) return false
  
  const pattern = [];
  for(let i = 0; i < sequence.length; i++){
    // get the currentindex of the num in arr[]
    pattern.push(arr.indexOf(sequence[i]))
    arr.splice(arr.indexOf(sequence[i]), 1, 'x')

    if(pattern.length >= 2){
      // console.log(pattern[i-2] > pattern[i-1])
      if(pattern[i-2] > pattern[i-1]){
        return false
      } 
    }
  }

  // do checking if the array is not in ASCENDING ORDER,, then we do not have a valid sequence
  return true
}
console.log(isValidSubsequence(array, sequence))
