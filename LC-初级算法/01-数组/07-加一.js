/**
 * 加一
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2cv1c/
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits = []) {
    let len = digits.length;
    let targetIndex = len - 1;
    for(let i = 0; i < len; i++) {
        // 如果不是9，就在数组最后一位加1，然后直接返回数组
        if(digits[len - i - 1] !== 9) {
            digits[len - i - 1] = digits[len - i - 1] + 1;
            return digits;
        }else {
            // 是9，则把该位置的数字变为0，再把前一位加1，如果前一位还是9，则继续把该位置的数字变为0
            targetIndex = len - i - 1;
            digits[targetIndex] = 0;
        }
    }
    // 此时已经把9都变为0了，接下来，就把目标索引对应的数字+1
    if(targetIndex !== 0) {
        digits[targetIndex] = digits[targetIndex] + 1;
    }else {
        // 如果目标索引为0，则说明数组的值都是9，上面的循环已经把他们变成0了，此时需要往数组前面添加1即可
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([0]));