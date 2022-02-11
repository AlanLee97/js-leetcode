// 125. 验证回文串 https://leetcode-cn.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

// 思路：先检测每个字符是否是字母或数字，然后拼接成字符串。再验证字符串是否是回文串
let isPalindrome = function(s) {
  // 验证是否是回文串
  function isValidsPalindrome(s) {
    for(let i = 0; i < s.length / 2; i++) {
      if(s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
  }

  // 检测是否是数字和字母
  function isCharOrNumber(s) {
    return /[a-z0-9]/.test(s.toLowerCase());
  }

  let res = '';
  for(let i = 0; i < s.length; i++) {
    if(isCharOrNumber(s[i])) {
      res += s[i].toLowerCase();
    }
  }
  return isValidsPalindrome(res);
};


console.log(isPalindrome("ababa"))
