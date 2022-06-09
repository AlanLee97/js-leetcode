/**
 * 反转字符串
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnhbqj/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s = []) {
    let len = s.length;
    let temp;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
    return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));