/**
 * 删除排序数组中的重复项
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2gy9m/
 * @param {number[]} nums
 * @return {number}
 */

// [0,1,1,1,2,2,3,4]
let removeDuplicates = function(nums) {
    debugger;
    if(nums.length === 0) return 0;
    if(nums.length === 1) return 1;
    let last = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]) {
            nums[last] = nums[i];
            last++;
        }
    }
    return last;
};


let res = removeDuplicates([0,0,1,1,1,2,2,3,4]);
console.log(res);