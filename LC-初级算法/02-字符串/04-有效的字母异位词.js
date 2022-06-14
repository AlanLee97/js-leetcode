/**
 * 有效的字母异位词
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn96us/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map1 = new Map();
    let map2 = new Map();
    for(let i = 0; i < s.length; i++) {
        map1.set(s[i], map1.has(s[i]) ? map1.get(s[i]) + 1 : 1);
        map2.set(t[i], map2.has(t[i]) ? map2.get(t[i]) + 1 : 1);
    }
    let keyArr = Array.from(map1.keys());
    let isEq = false;
    for(let i = 0; i < keyArr.length; i++) {
        isEq = map1.get(keyArr[i]) === map2.get(keyArr[i]);
        if(!isEq) return isEq;
    }

    return isEq;
};

// 方法2，排序
let isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false;
    let sArr = [...s].sort();
    let tArr = [...t].sort();
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] !== tArr[i]) return false;
    }

    return true;
};

console.log(isAnagram2('rat', 'car'));