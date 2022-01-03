// 回文数 https://leetcode-cn.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let strArr = x.toString().split('');
  let res = true;
  for(let i = 0; i < strArr.length / 2; i++) {
    if(strArr[i] !== strArr[strArr.length - i - 1]) res = false;
  }
  return res;
};

console.log(isPalindrome(12321))