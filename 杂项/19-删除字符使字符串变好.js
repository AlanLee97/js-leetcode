// 1957. 删除字符使字符串变好 https://leetcode-cn.com/problems/delete-characters-to-make-fancy-string/

/**
 * @param {string} s
 * @return {string}
 */

// 思路：用res变量保存结果，用count变量保存重复的个数，如果重复数小于3则直接拼接字符串，否则不拼接第3个之后的重复字符串
let makeFancyString = function(s) {
  let res = '';
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    count += 1;
    if(count < 3) {
      res += s[i];
    }
    if(s[i] !== s[i+1]) {
      count = 0;
    }
  }
  return res;
};
console.log(makeFancyString("aaabaaaa"))
