/**
 * 实现 strStr()
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnr003/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack = '', needle = '') {
  let cur = 0;
  let firstIndex
  for (let i = 0; i < haystack.length; i++) {
    debugger
    const element = haystack[i];
    if(element === needle[cur]) {
      if (firstIndex === undefined) firstIndex = i
      cur++
      if(cur === needle.length) return firstInde
    } else {
      
    }
  }
};


// console.log('alan->', strStr('sadbutsad', 'sad'))
console.log('alan->', strStr('leetcode', 'leeto'))