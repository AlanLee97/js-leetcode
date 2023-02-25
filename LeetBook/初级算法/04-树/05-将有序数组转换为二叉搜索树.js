/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 将有序数组转换为二叉搜索树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xninbt/
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 思路：
// 1. 二分法， 取数组中间值作为根节点
// 2. 左边子数组作为左节点，右边子数组作为右节点
// 3. 分到最后数组只有一个值时，则为叶子节点
const sortedArrayToBST = function(nums = []) {
  if(!nums.length) return null;
  if(nums.length === 1) return new TreeNode(nums[0]);

  const midIndex = Math.floor(nums.length / 2);
  const midVal = nums[midIndex];
  const leftNums = nums.slice(0, midIndex); // [-10, -3]
  const rightNums = nums.slice(midIndex+1); // [5, 9]
  return new TreeNode(midVal, sortedArrayToBST(leftNums), sortedArrayToBST(rightNums));
};

const nums = [-10,-3,0,5,9]
const nums2 = [1,3]
const nums3 = [0,1,2,3,4,5]

// console.log('alan->', sortedArrayToBST(nums))
// console.log('alan->2', sortedArrayToBST(nums2))
console.log('alan->3', sortedArrayToBST(nums3))