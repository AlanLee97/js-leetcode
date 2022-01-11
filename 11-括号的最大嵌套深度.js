// 1614. 括号的最大嵌套深度 https://leetcode-cn.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */


// 思路：
// 用栈的思想来解决括号匹配问题，这里可用变量统计合法的()即可
let maxDepth = function(s) {
  let size = 0;
  let res = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === '(') {
      size += 1;
      res = res > size ? res : size;
    }else if(s[i] === ')'){
      size -= 1;
    }
  }
  return res;
};
console.log(maxDepth('(1+(2*3)+((8)/4))+1'))