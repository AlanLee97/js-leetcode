/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树的层序遍历
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnldjj/
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 思路：
// 1. 定一个变量curLevel，记录当前层级数
// 2. 用当前层级数作为索引获取二维数组中的数据
// 3. 如果有数据，则追加，如果没有，则新建一个数组把当前节点值存放进去，再把数组存入res结果
// 4. 递归遍历
const levelOrder = function(root) {
  let res = []
  let curLevel = 0;
  return helper(root, curLevel, res);
};

function helper(root, curLevel = 0, res) {
  if(!root) return res;
  curLevel++;
  let curLevelRes = res[curLevel-1] || [];
  curLevelRes.push(root.val);
  res[curLevel-1] = curLevelRes;
  helper(root.left, curLevel, res);
  helper(root.right, curLevel, res);
  return res;
}

//[[3],[9,20],[15,7]]
const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

console.log('alan->', tree);
console.log('alan->', levelOrder(tree));