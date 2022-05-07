const n = [2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2]
const x = [1,2,3,4]
const b = [3,1,3,4,3]

function maxOperations(nums, k) {
  let count = 0// total operations
  // get the count
  const freq = {}
  for(let i = 0 ; i < nums.length; i++) {
    nums[i] in count ? count[nums[i]]++ : count[nums[i]] = 1
  }

  // loop through numbers to find pair
  for (let i = 0; i< nums.length; i++) {
    const num = nums[i]
    const missingNum = k - num
    if(missingNum in count && count[missingNum] !== 0 && count[num] !== 0) {  // if the number exists
      count[missingNum]--
      count[num]--
      ops++
    }
  }

  return ops
}

console.log(maxOperations(b, 6))