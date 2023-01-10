// 1. 两数之和 https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2,7,11,15], 9))


let twoSum2 = function(nums, target) {
  let map = new Map();
  /* 
  {
    7: 0,
    2: 1
  }
  */
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }
    map.set(target - nums[i], i);
  }
};

console.log(twoSum2([3,2,4], 6))
