/**
 * 整数反转
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnx13t/
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    let s = '' + x;
    s = [...s].reverse();
    if(s[s.length-1] === '-') {
        s.pop();
    }
    s = s.join('');
    s = new Number(s).toString();
    if(x < 0) {
        s = 0 - s;
    }
    let min = -Math.pow(2, 31);
    let max = Math.pow(2, 31)-1;
    if(s < min || s > max) {
        return 0;
    }
    return s;

};

console.log(reverse(1563847412))