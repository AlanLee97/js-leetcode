/**
 * 字符串中的第一个唯一字符
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn5z8r/
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function(s = '') {
    // loveleetcode
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        }else {
            map.set(s[i], 1)
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i]) && map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

let firstUniqChar2 = function(s = '') {
    // loveleetcode
    for(let i = 0; i < s.length; i++) {
        if(s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar2("loveleetcode"));