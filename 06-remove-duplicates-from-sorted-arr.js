// var nums = [1,1,2]
function removeDuplicates (nums) {
  // loop through and check if the nums are the same, if they are, splice the current number
  let i = 0;
  while (i < nums.length){
    const inFront = nums[i + 1]
    const current = nums[i]
    if(current === inFront && current != '_') {
      nums.splice(current, 1)
      i--
      nums.push('_')
    } else {
      i++
    }
  }
  // return nums
}
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicates([1,1,2]))



function removeDuplicates2(nums) {
  const model = [...new Set(nums)]
  model.forEach((el,i) => {
    nums[i] = el
    if(i === model.length - 1) {
      nums.splice(i+1, nums.length - model.length)
    }
  })

    

console.log(nums)
}
console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]))