// 2011. 执行操作后的变量值 https://leetcode-cn.com/problems/final-value-of-variable-after-performing-operations/

/**
 * @param {string[]} operations
 * @return {number}
 */
let finalValueAfterOperations = function(operations) {
  let x = 0;
  operations.map(item => {
    if(item.includes("++")) {
      x += 1;
    }else {
      x -= 1;
    }
  })
  return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"])) 