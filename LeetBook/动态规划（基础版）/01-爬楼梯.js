
// T-O(n); S-O(1)
function climbStairs(n) {
  if(n === 1) return 1;
  if(n === 2) return 2;
  return climbStairs(n-1) + climbStairs(n-2);
}

// T-O(n); S-O(1)
function climbStairs2(n) {
  if(n === 1) return 1;
  if(n === 2) return 2;
  let a = 1; b = 2; c = a + b;
  for(let i = 3; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}

console.log('alan->', climbStairs2(4))