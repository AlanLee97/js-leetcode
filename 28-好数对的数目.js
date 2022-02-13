// 1512. 好数对的数目 https://leetcode-cn.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = function(nums) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(i < j && nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

let numIdenticalPairs2 = function(nums) {
  let count = 0;
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    count += (map.get(nums[i]) || 0);
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return count;
};
console.log(numIdenticalPairs2([1,2,3,1,1,3]))
