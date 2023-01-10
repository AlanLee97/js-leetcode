// 977. 有序数组的平方 https://leetcode-cn.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 执行用时：100 ms
// 内存消耗：46.8 MB
let sortedSquares = function(nums) {
    nums = nums.map(item => {
        return item * item;
    });
    nums.sort((a, b) => a - b);
    return nums;
};

// 执行用时：88 ms
// 内存消耗：47.7 MB
// 双指针法
let sortedSquares2 = function(nums) {
    let ans = [];
    for(let i = 0, j = nums.length - 1, pos = nums.length - 1; i <= j;) {
        debugger;
        if(nums[i] * nums[i] > nums[j] * nums[j]) {
            ans[pos] = nums[i] * nums[i];
            i++;
        }else {
            ans[pos] = nums[j] * nums[j];
            j--;
        }
        pos--;
    }
    return ans;
};

console.log(sortedSquares2([-4,-1,0,3,10]));

