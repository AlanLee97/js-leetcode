// 使用最小花费爬楼梯 https://leetcode.cn/problems/min-cost-climbing-stairs/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划方法
// T-O(n); S-O(n)
const minCostClimbingStairs = function(cost = []) {
  const dp = [];
  dp.length = cost.length + 1;
  dp.fill(0);
  for(let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
  }
  return dp[cost.length];
};

// 动态规划方法
// T-O(n); S-O(1)
const minCostClimbingStairs2 = function(cost = []) {
  let curr = 0; prev = 0; next = 0;
  for(let i = 2; i <= cost.length; i++) {
    next = Math.min(curr + cost[i-1], prev + cost[i-2]);
    prev = curr;
    curr = next;
  }
  return next;
};

const cost = [1,100,1,1,1,100,1,1,100,1]

console.log('alan->', minCostClimbingStairs2(cost))