// 1920. 基于排列构建数组 https://leetcode-cn.com/problems/build-array-from-permutation/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let buildArray = function(nums) {
  let ans =[];
  nums.forEach(item => {
    ans.push(nums[item]);
  })
  return ans;
};


console.log(buildArray([0,2,1,5,3,4]))
console.log(buildArray([5,0,1,2,3,4]))
