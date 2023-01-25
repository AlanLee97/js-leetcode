/**
 * 最长公共前缀
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnmav1/
 * @param {string[]} strs
 * @return {string}
 */
// 思路：
// 1. 循环strs
// 2. 将遍历的字符放到数组中
// 3. 判断数组中的每个字符是否相等
// 4. 如果不相等，直接返回prefix
// 5. 相等则追加到prefix
const longestCommonPrefix = function(strs) {
  let ch = strs[0][0]
  let j = 0
  let arr = []
  let prefix = ''
  const isAllSame = (arr = []) => arr.every(item => item === arr[0])
  while(1 && ch) {
    for(let i = 0; i < strs.length; i++) {
      let str = strs[i]
      ch = str[j]
      arr.push(ch)
    }
    if(!isAllSame(arr)) {
      return prefix
    } else {
      arr[0] && (prefix += arr[0])
    }
    j++
    arr = []
  }
  return prefix
};

let arr = ["flower","flow","flight"]
let arr2 = ["dog",
            "racecar",
            "car"]
let arr3 = ["reflower","flow","flight"]
// console.log(longestCommonPrefix(arr))
// console.log(longestCommonPrefix(arr2))
// console.log(longestCommonPrefix(arr3))
