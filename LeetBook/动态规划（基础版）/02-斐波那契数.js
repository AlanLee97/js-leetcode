// https://leetcode.cn/problems/fibonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming
/**
 * @param {number} n
 * @return {number}
 */
// 递归方法
// T-O(n); S-O(n)
const fib = function(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  return fib(n-1) + fib(n-2);
};

// 动态规划方法
// T-O(n); S-O(1)
const fib2 = function(n) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  let a = 0; b = 1; c = a + b;
  for(let i = 2; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
};

console.log('alan->', fib2(1))
console.log('alan->', fib2(2))
console.log('alan->', fib2(3))
console.log('alan->', fib2(4))