// 1863. 找出所有子集的异或总和再求和 https://leetcode-cn.com/problems/sum-of-all-subset-xor-totals/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 只通过了部分测试用例，后续再研究
let subsetXORSum = function(nums) {
  // 找子集
  let subSet = findSubSet(nums);
  console.log('subSet', subSet);

  // 求异或和
  let res = 0;
  subSet.forEach(item => {
    res += calcXORSum(item);
  });
  return res;
};

// 找子集
function findSubSet(nums) {
  let ans = [];
  nums.forEach(item => {
    ans.push([item]);
  })
  let k = 0;
  while(k < nums.length) {
    let tempArr = [nums[k]];
    for(let i = k; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j++) {
        let oArr = tempArr.slice();
        tempArr.push(nums[j])
        ans.push(tempArr)
        tempArr = oArr;
      }
      tempArr.push(nums[i+1]);
    }
    k++;
  }
  return ans.slice();
}

// 求异或和
function calcXORSum(nums) {
  let res = 0;
  nums.forEach(item => {
    res = res ^ item;
  })
  return res;
}

console.log(subsetXORSum([3,4,5,6,7,8]))
