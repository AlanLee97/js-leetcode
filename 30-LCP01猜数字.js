// LCP 01. 猜数字 https://leetcode-cn.com/problems/guess-numbers/

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
let game = function(guess, answer) {
  let count = 0;
  guess.forEach((item, index) => {
    if(item === answer[index]) {
      count++;
    }
  });
  return count;
};

console.log(game([1,2,3], [1,2,3]))
