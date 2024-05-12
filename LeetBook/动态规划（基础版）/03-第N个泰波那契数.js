// https://leetcode.cn/problems/n-th-tribonacci-number/description/?envType=study-plan-v2&envId=dynamic-programming

/**
 * @param {number} n
 * @return {number}
 */

// 动态规划方法
// T-O(n); S-O(1)
const tribonacci = function(n) {
  if(n === 0) return 0; // 0
  if(n === 1) return 1; // 1
  if(n === 2) return 1; // 1
  let t0 = 0; t1 = 1; t2 = 1; t3 = 2;
  for(let i = 3; i < n; i++) {
    t0 = t1;
    t1 = t2;
    t2 = t3;
    t3 = t0 + t1 + t2;
  }
  return t3;
};

console.log('alan->', tribonacci(1))
console.log('alan->', tribonacci(2))
console.log('alan->', tribonacci(3))
console.log('alan->', tribonacci(4))
console.log('alan->', tribonacci(25))