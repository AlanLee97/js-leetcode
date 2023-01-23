/**
 * 实现 strStr()
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnr003/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 思路：
// 1. 遍历字符串haystack
// 2. 将每一个元素与needle的元素做对比，定一个cur变量，用于记录needle字符串的匹配索引
// 3. 如果元素相等，则cur++，如果cur等于neddle字符串长度，则返回start.value
// 4. 否则，将cur清零，从新记录
// 5. 将字符串的第一个字符去除，再递归调用handleStr

const strStr = function(haystack = '', needle = '') {
  let start = {
    value: -1
  }
  return handleStr(haystack, needle, start)
};

function handleStr(haystack = '', needle = '', start) {
  start.value += 1
  let cur = 0;
  for (let i = 0; i < haystack.length; i++) {
    const element = haystack[i];
    if(element === needle[cur]) {
      cur++
      if(cur === needle.length) return start.value
    } else {
      cur = 0
      return handleStr(haystack.substring(1), needle, start)
    }
  }
  return -1
};

console.log('alan->', strStr('sadbutsad', 'sad'))
console.log('alan->', strStr('leetcode', 'leeto'))
console.log('alan->', strStr('mississippi', 'issip'))
console.log('alan->', strStr('hello', 'll'))