/**
 * 验证回文串
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xne8id/
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    if(s.length === 0) return true;

    let isLegalChar = (char) => {
        let reg = /[0-9A-Za-z]/g;
        return reg.test(char);
    }

    let str = '';
    for(let i = 0; i < s.length; i++) {
        if(isLegalChar(s[i])) {
            str += s[i].toLocaleLowerCase();
        }
    }

    if(str.length === 0) return true;
    if(str.length === 1) return true;
    if(str.length === 2) {
        return str[0] === str[1];
    }

    let res = true;
    for(let i = 0; i < Math.floor(str.length / 2); i++) {
        if(str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return res;
};

// todo
let isPalindrome2 = function(s) {
    if(s.length === 0) return true;

    let isLegalChar = (char) => {
        let reg = /[0-9A-Za-z]/g;
        return reg.test(char);
    }

    //   v
    // A man, a plan, a canal: Panama
    //                             ^
    let res = true;
    let start = 0, last = s.length - 1;
    for(let i = 0; start < last; i++) {
        debugger;
        while(start < last && !isLegalChar(s[i])) start++;
        while(start < last && !isLegalChar(s[s.length - i - 1])) last--;
        if(s[start].toLocaleLowerCase() !== s[last].toLocaleLowerCase()) {
            return res = false;
        }else {
            last -= 1;
            start += 1;
        }
    }
    return res;

};

console.log(isPalindrome2("race a car"));