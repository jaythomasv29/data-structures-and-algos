var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i); 
    const leftTotal = left.reduce((total, num) => total + num, 0);
    const right = nums.slice(i + 1); 
    const rightTotal = right.reduce((total, num) => total + num, 0);
    if (leftTotal === rightTotal) return i;
  }
  return -1;
};

var pivotIndex2 = function(nums) {
  const totalsum = nums.reduce((total, num) => (total + num), 0)
  let leftsum = 0
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let rightsum = totalsum - leftsum - num
    console.log(leftsum, rightsum)
    if(leftsum === rightsum) return i
    leftsum += num
  }
  return -1
}

const nums = [2, 1, -1];
const n = [1, 7, 3, 6, 5, 6];  // 3
console.log(pivotIndex2(n));
