/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的最大深度
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnd69e/
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：

const maxDepth = function(root) {
  if(root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// todo
// const maxDepth2 = function(root) {
//   let count = 1;
//   if(root === null) return 0;
//   const calMaxDepth = (root) => {
//     if(root === null) return 0;
//     if(root.left !== null) {
//       count += calMaxDepth(root.left)
//     }
  
//     if(root.right !== null) {
//       count += calMaxDepth(root.right)
//     }
//     return 1;
//   }
//   calMaxDepth(root);
//   return count;
// };

const root = new TreeNode(0, new TreeNode(1), new TreeNode(2, null, new TreeNode(3)));
const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
// console.log('alan->maxDepth2', maxDepth2(root2));
// console.log('alan->maxDepth2', maxDepth2(root));
console.log('alan->maxDepth', maxDepth(root));