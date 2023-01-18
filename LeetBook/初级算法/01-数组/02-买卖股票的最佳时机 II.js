/**
 * 买卖股票的最佳时机 II
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2zsx1/
 * @param {number[]} prices
 * @return {number}
 */
// 思路：
// 1. 遍历数组
// 2. 如果后天减前一天 > 0，表示有利润
// 3. 累加所有利润
const maxProfit = function(prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if(prices[i+1] - prices[i] > 0) {
      profit += prices[i+1] - prices[i]
    }
  }
  return profit
};

console.log('alan->', maxProfit([1,2,3,4,5]))