// 1662. 检查两个字符串数组是否相等 https://leetcode-cn.com/problems/check-if-two-string-arrays-are-equivalent/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
let arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('');
};

let arrayStringsAreEqual2 = function(word1, word2) {
  let s1 = '';
  let s2 = '';
  word1.map(item => {
    s1 += item;
  })
  word2.map(item => {
    s2 += item;
  })
  return s1 === s2;
};
console.log(arrayStringsAreEqual2(["ab", "c"], ["a", "bc"]))
