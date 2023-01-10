// 剑指 Offer 58 - II. 左旋转字符串 https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
let reverseLeftWords = function(s, n) {
  return s.slice(n, s.length) + s.slice(0, n);
};

console.log(reverseLeftWords('abcdefg', 2)) 