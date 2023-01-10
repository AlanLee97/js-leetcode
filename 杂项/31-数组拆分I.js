// 561. 数组拆分 I https://leetcode-cn.com/problems/array-partition-i/

/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < nums.length; i += 2) {
        ans += nums[i];
    }
    return ans;
};

console.log(arrayPairSum([1,3,2,4]));
