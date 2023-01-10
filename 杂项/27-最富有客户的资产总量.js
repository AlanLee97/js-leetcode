// 1672. 最富有客户的资产总量 https://leetcode-cn.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
// 执行用时：64 ms
// 内存消耗：41.3 MB
let maximumWealth = function(accounts) {
  let max = 0;
  accounts.forEach(itemArr => {
    let sum = 0;
    itemArr.forEach(item => {
      sum += item;
    });
    max = sum > max ? sum : max;
  });
  return max;
};

// 执行用时：56 ms
// 内存消耗：40.9 MB
let maximumWealth2 = function(accounts) {
  let max = 0;
  accounts.forEach(itemArr => {
    let sum = itemArr.reduce((prev, curr) => {
      return prev + curr;
    })
    max = sum > max ? sum : max;
  });
  return max;
};
console.log(maximumWealth2([[2,8,7],[7,1,3],[1,9,5]]))
