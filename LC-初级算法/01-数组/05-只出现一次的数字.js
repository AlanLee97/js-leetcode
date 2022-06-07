/**
 * 只出现一次的数字
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x21ib6/
 * @param {number[]} nums
 * @return {number}
 */
// 思路：先排序，再判断左右两边是否相等，如果左右两边都不等，则该数字必为不重复的数字
let singleNumber = function(nums) {
    nums.sort();    // [1,1,2,2,4]
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if(item !== nums[i-1] && item !== nums[i+1]) {
            return item;
        }
    }
};
console.log(singleNumber([4,1,2,1,2]));