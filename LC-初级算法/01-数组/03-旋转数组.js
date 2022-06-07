/**
 * 旋转数组
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 原地修改数组
// [1,2,3,4,5,6,7]
let rotate = function(nums = [], k = 0) {
    if(k < nums.length) {
        let slice = nums.splice(nums.length - k, k);
        slice.reverse().forEach(item => {
            nums.unshift(item);
        })
    }else {
        let lastIndex = nums.length - 1;
        while(k > 0) {
            let lastValue = nums[nums.length-1];
            for(let i = 0; i < nums.length; i++) {
                nums[lastIndex - i] = nums[lastIndex-i-1];
            }
            nums[0] = lastValue;
            k--;
        }
    }

    return nums;
};



// console.log(rotate2([1,2,3,4,5,6,7], 3))
console.log(rotate([1,2], 5))