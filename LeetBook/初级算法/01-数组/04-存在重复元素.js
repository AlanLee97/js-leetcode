/**
 * 存在重复元素
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 * @param {number[]} nums
 * @return {boolean}
 */
// 思路：
// 1. 用map保存键值对
// 2. 判断是否有该键，有则返回true
const containsDuplicate = function(nums) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.get(nums[i]) !== undefined) return true
    map.set(nums[i], nums[i])
  }
  return false
};

console.log('alan->', containsDuplicate([0,4,5,0,3,6]))

// 耗时长
// 思路：
// 1. 先对数组排序，从小到大
// 2. 如果有其中两两相等的，则表示有重复值
const containsDuplicate2 = function(nums) {
  nums.sort()
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === nums[i+1]) return true
  }
  return false
};

console.log('alan->', containsDuplicate2([0,4,5,0,3,6]))