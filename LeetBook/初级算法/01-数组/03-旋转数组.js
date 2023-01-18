/**
 * 旋转数组
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：
// 1. 循环k次
// 2. 把最后一个值，插入到数组最前端
// 3. 重新赋值数组的length，把数组截断
const rotate = function(nums, k) {
  let len = nums.length
  for (let i = 0; i < k; i++) {
    nums.unshift(nums[nums.length - i - 1])
  }
  nums.length = len
  console.log('alan->', nums)
};

rotate([1,2,3,4,5,6,7], 3)


// 耗时长
// 思路：
// 1. 从后面遍历
// 2. 把最后的值保存起来，记为end
// 3. 把前一个覆盖当前值
// 4. 遍历到头部时，直接把第1个值赋值为end
const rotate2 = function(nums, k) {
  for(let i = 0; i < k; i++) {
    let end = nums[nums.length - 1]
    for(let j = nums.length - 1; j >= 0; j--) {
      if (j === 0) {
        nums[0] = end
        break
      }
      nums[j] = nums[j-1]
    }
  }
  console.log('alan->', nums)
};

