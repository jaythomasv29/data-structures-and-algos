var runningSum = function(nums) {
  /**
   * edge cases -> what if empty array? 
   *  -> what if only 1 item in array
   */
  if(nums.length === 0) return null
  if(nums.length === 1) return nums
  
  let results = [ nums[0] ]
  // loop through nums[], starting at index 1
  // sum the results of (result[index - 1] + nums[index] and push to results)
  // return results 
  for(let i = 1; i < nums.length; i++) {
      const num = nums[i]
      results.push(results[i - 1] + num)  // [(1), (1+2), (3+3), (6+4)  ]
  }
  return results
  
};

const nums = [1,2,3,4]
// Output: [1,3,6,10]

console.log(runningSum(nums))