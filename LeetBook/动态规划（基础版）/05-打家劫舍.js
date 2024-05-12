// 打家劫舍 https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number[]} nums
 * @return {number}
 */
// 状态转移方程：dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
// 动态规划方法
// T-O(n); S-O(n)
const rob = function(nums = []) {
  const dp = [];
  dp.length = nums.length;
  dp.fill(0);

  dp[0] = nums[0];
  dp[1] =  Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]);
  }
  return dp[nums.length-1];
};

// 动态规划方法
// T-O(n); S-O(1)
const rob2 = function(nums = []) {
  if(nums.length === 1) return nums[0];
  const dp = [0, 0];
  dp[0] = nums[0];
  dp[1] =  Math.max(nums[0], nums[1]);

  for(let i = 2; i < nums.length; i++) {
    dp[i%2] = Math.max(nums[i] + dp[(i-2)%2], dp[(i-1)%2]);
  }
  return Math.max(dp[0], dp[1]);
}

// 动态规划方法
// T-O(n); S-O(1)
const rob3 = function(nums = []) {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[0], nums[1]);
  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);
  let next = 0;

  for(let i = 2; i < nums.length; i++) {
    next = Math.max(nums[i] + prev, curr);
    prev = curr;
    curr = next;
  }
  return next;
}

const nums = [1,2,3,1]
const nums2 = [2,7,9,3,1]
console.log('alan->', rob3(nums))
console.log('alan->', rob3(nums2))
