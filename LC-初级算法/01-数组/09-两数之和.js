/**
 * 两数之和
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2jrse/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums = [], target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

let twoSum2 = function(nums = [], target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
};

console.log(twoSum2([2,7,11,15], 9));