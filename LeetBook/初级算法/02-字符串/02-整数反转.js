/**
 * 整数反转
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnx13t/
 * @param {number} x
 * @return {number}
 */
// 思路：
// 1. 判断x是否小于0，做个标记
// 2. 把数字转为字符串数组
// 3. 如果x小于0，把-号去除
// 4. 遍历字符串数组，将字符串反转
// 5. 将反转后的数组拼接为字符串
// 6. 将字符串转为数字
const reverse = function(x) {  
  let hasSign = x < 0
  let xStr = (x + '').split('')
  if(hasSign) xStr.shift()

  let temp
  for (let i = 0; i < Math.floor(xStr.length / 2); i++) {
    temp = xStr[i];
    xStr[i] = xStr[xStr.length - 1 - i]
    xStr[xStr.length - 1 - i] = temp
  }
  let res = +(xStr.join(''))
  if(res <= Math.pow(-2, 31) || res >= (Math.pow(2, 31) - 1)) return 0
  return hasSign ? '-' + res : res + ''
};

console.log('alan->', reverse(1534236469))
console.log('alan->', reverse(-123))
console.log('alan->', reverse(1230))