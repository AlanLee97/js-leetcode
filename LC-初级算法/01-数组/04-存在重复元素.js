/**
 * 存在重复元素
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x248f5/
 * @param {number[]} nums
 * @return {boolean}
 */
// 使用map
let containsDuplicate = function(nums = []) {
    let map = new Map();
    let res = false;
    for(let i = 0; i < nums.length; i++) {
        let count = map.get(nums[i]) ?? 0;
        if(count >= 1) {
            res = true;
            break;
        }
        map.set(nums[i], count+1)
    }
    return res;
};

// 排序数组，两两比较
let containsDuplicate2 = function(nums = []) {
    nums.sort();
    let res = false;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i+1]) {
            res = true;
            return res;
        }
    }
    return res;
};

// 使用Set
let containsDuplicate3 = function(nums = []) {
    let res = true;
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        res = set.has(nums[i]);
        if(res) {
            return res;
        }
        set.add(nums[i]);
    }
    return res;
};

console.log(containsDuplicate3([1,2,3,1]));