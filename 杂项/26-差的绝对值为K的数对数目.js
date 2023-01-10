// 2006. 差的绝对值为 K 的数对数目 https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let countKDifference = function(nums, k) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  return count;
};

let countKDifference2 = function(nums, k) {
  let count = 0;
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    count += (map.get(nums[i] - k) || 0) + (map.get(nums[i] + k) || 0);
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return count;
};
console.log(countKDifference2([3,2,1,5,4], 2))
