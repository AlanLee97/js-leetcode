// 1431. 拥有最多糖果的孩子 https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 let kidsWithCandies = function(candies, extraCandies) {
  let ans = []
  candies.forEach((item, index) => {
    candies[index] = item + extraCandies;
    ans.push(Math.max(...candies) === candies[index]);
    candies[index] = item;
  });
  return ans;
};

console.log(kidsWithCandies([2,3,5,1,3], 3))
