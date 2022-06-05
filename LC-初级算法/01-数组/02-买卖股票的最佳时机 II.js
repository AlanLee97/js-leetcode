/**
 * 买卖股票的最佳时机 II
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2zsx1/
 * @param {number[]} prices
 * @return {number}
 */
// 低价购买，高价卖出
// 找出最大最小
// 第2天比第1天股价低，买第2天的

// 买：
//   - 当天股价是所有天数中最低的
//   - 
// 卖：
//   - 当天价格比买入价格高，再计算利润
// todo

//[7,1,5,3,6,4]
let maxProfit = function(prices = []) {
    let profit = 0;
    
    prices.forEach((item, i) => {
        if(i > 0) {
            if(item > prices[i-1]) {
                profit += (item - prices[i-1])
            }
        }
    })
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));