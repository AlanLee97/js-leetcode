/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：
// 1. 定义一个指针，保存当前不同值的索引，从0开始
// 2. 然后每遍历到下一个元素时，与nums[current]对比是不是相同的值
// 3. 若相同，先把current往前移动一位（current++），再把值赋给nums[current]
// 4. 返回current，就是不同项的个数
const removeDuplicates = function(nums) {
  let current = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i+1] !== nums[current]) {
      current++;
      if(i + 1 < nums.length) {
        nums[current] = nums[i+1]
      }
    }
  }
  nums.length = current
  return current
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

