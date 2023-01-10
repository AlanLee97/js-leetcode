// 2114. 句子中的最多单词数 https://leetcode-cn.com/problems/maximum-number-of-words-found-in-sentences/

/**
 * @param {string[]} sentences
 * @return {number}
 */
let mostWordsFound = function(sentences) {
  let res = 0;
  let len = 0;
  sentences.map(item => {
    len = item.split(' ').length;
    res = len > res ? len : res;
  })
  return res;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])) 