const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length - 1;
  let temp;
  while (i !== j) {
    if (nums[i] !== 5) {
      i++;
    } 
    else if( nums[j] === 5) {
      j--;
    }
    else {
      // perform the swap
      // temp = nums[j]
      // nums[j] = nums[i]
      // nums[i] = temp
      [nums[i], nums[j]] = [ nums[j], nums[i]]
    } 
  }
  return nums;
};

console.log(fiveSort([1, 2, 5, 3, 5, 5, 5]));
