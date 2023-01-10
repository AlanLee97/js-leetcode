// 1480. 一维数组的动态和 https://leetcode-cn.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let runningSum = function(nums) {
  let ans = [];
  nums.forEach((item, index) => {
    let res = item;
    for(let i = 0; i < index; i++) {
      res += nums[i];
    }
    ans.push(res);
  });
  return ans;
};

let runningSum2 = function(nums) {
  for(let i = 1; i < nums.length; i++) {
    nums[i] += nums[i-1];
  }
  return nums;
};
console.log(runningSum2([1,2,3,4]))
