// 1816. 截断句子 https://leetcode-cn.com/problems/truncate-sentence/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
let truncateSentence = function(s, k) {
  return s.split(' ').splice(0, k).join(' ')
};

// 思路：统计空格的数量，空格数的k时，前面的字符串就是我们要的字符串
let truncateSentence2 = function(s, k) {
  let spaceCount = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      spaceCount++;
    }
    if (spaceCount === k) {
      return s.slice(0, i);
    }
  }
  return s;
};

// 思路，遇到空格就减一个k，减到0时，前面就是我们要的字符串
let truncateSentence3 = function(s, k) {
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ' ') {
      k--;
    }
    if (0 === k) {
      return s.substring(0, i);
    }
  }
  return s;
};
console.log(truncateSentence3('Hello how are you Contestant', 4))
