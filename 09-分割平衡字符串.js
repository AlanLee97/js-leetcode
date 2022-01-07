// 1221. 分割平衡字符串 https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
  if(s.length === 1) return 0;
  let curStr = s[0];
  let count = 0;
  /**
   * 思路
   * 遍历字符串
   * 拼接 当前字符串 和 下一个字符串
   * 判断拼接的字符串是否是平衡串
   */
  for(let i = 1; i < s.length; i++) {
    curStr = curStr + s[i]
    if(isBalanceString(curStr)) {
      count += 1;
      i += 1;
      curStr = i < s.length && s[i];
    }

  }
  return count;
};

function isBalanceString(s) {
  let LCount = 0;
  let RCount = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "R") {
      RCount += 1;
    }else if(s[i] === "L"){
      LCount += 1;
    }else {
      return false;
    }
  }
  return LCount === RCount;
}

// 官方解法
// 思想：
// 用一个变量记录L或R的数量，碰到时加1，否则减1，当记录为0时，平衡字符串数量加1
function balancedStringSplit2(s) {
  let count = 0, d = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === "L") {
      d += 1;
    }else {
      d -= 1;
    }
    if(d === 0) {
      count += 1;
    }
  }
  return count;
}
console.log(balancedStringSplit2('RLRRLLRLRL')) 