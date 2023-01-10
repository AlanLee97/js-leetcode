// 1929. 数组串联 https://leetcode-cn.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 执行用时：84 ms
// 内存消耗：43.8 MB
let getConcatenation = function(nums) {
  return nums.concat(nums);
};


// 执行用时：72 ms
// 内存消耗：44.4 MB
let getConcatenation2 = function(nums) {
  nums.forEach(item => {
    nums.push(item);
  });
  return nums;
};


// 执行用时：76 ms
// 内存消耗：44.2 MB
let getConcatenation3 = function(nums) {
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    nums.push(nums[i]);
  }
  return nums;
};

// 执行用时：80 ms
// 内存消耗：44.4 MB
let getConcatenation4 = function(nums) {
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    nums[len + i] = nums[i];
  }
  return nums;
};


console.log(getConcatenation4([1,2,1]))
