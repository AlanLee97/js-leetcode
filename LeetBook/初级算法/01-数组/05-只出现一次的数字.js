/**
 * 只出现一次的数字
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
 * @param {number[]} nums
 * @return {number}
 */
// 思路：
// 1. 先进行排序
// 2. 遍历判断，如果当前项不等于前后项，则表示这是单一的数字
const singleNumber = function(nums) {
  nums.sort()
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
      return nums[i]
    }
  }
};

console.log('alan->', singleNumber([1,2,2,2]))

// 思路：
// 1. 使用异或判断
const singleNumber2 = function(nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
};

console.log('alan->', singleNumber2([1,2,2,2]))