// 剑指 Offer 17. 打印从1到最大的n位数 https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/

/**
 * @param {number} n
 * @return {number[]}
 */
let printNumbers = function(n) {
    let ans = [];
    for(let i = 1; i < Math.pow(10, n); i++) {
        ans[i-1] = i;
    }
    return ans;
};

console.log(printNumbers(2));
