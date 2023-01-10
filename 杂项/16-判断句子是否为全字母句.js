// 1832. 判断句子是否为全字母句 https://leetcode-cn.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */

// 思路：使用set保存每个字母，再判断set的大小，并判断每个字符是否是a-z的字母
let checkIfPangram = function(sentence) {
  if(sentence.length < 26) return false;
  sentence = sentence.toLocaleLowerCase();
  let set = new Set();
  let reg = /[a-z]+/;
  let flag = true;
  for(let i = 0; i < sentence.length; i++) {
    set.add(sentence[i])
    flag = reg.test(sentence[i])
  }
  console.log('set', Array.from(set).sort());
  return flag && set.size === 26;
};

// 思路：列出所有字母，判断每个sentence的每个字母是否在a-z的字母
let checkIfPangram2 = function(sentence) {
  if(sentence.length < 26) return false;
  let allChar = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < allChar.length; i++) {
    if(!sentence.includes(allChar[i])) {
      return false;
    }
  }
  return true;
};
console.log(checkIfPangram2('abc1'))
console.log(checkIfPangram2('thequickbrownfoxjumpsoverthelazydog'))
console.log(checkIfPangram2("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo"))