/**
 * 反转字符串
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnhbqj/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  let mid = s.length / 2
  let temp
  for (let i = 0; i < mid; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      temp = s[i]
      s[i] = s[s.length - 1 - i]
      s[s.length - 1 - i] = temp
    }
  }
  console.log('alan->', s)
};

reverseString(["H","a","n","n","a","h"])