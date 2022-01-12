// 1684. 统计一致字符串的数目 https://leetcode-cn.com/problems/count-the-number-of-consistent-strings/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

// 思路：
// 遍历words的每一个字符串，然后判断该字符串的字符是否是allowed的字符
let countConsistentStrings = function(allowed = '', words = []) {
  let count = 0;
  words.map(item => {
    if(item === allowed) {
      count += 1;
    }else {
      let flag = true;
      for(let i = 0; i < item.length; i++) {
        flag = allowed.includes(item[i]);
        if(!flag) break;
      }
      if(flag) {
        count += 1;
      }
    }
  })
  return count;
};
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]))
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))