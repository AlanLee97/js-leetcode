/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 对称二叉树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn7ihv/
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if(!root) return true;
  return helper(root.left, root.right);
};

function helper(root1, root2) {
  if(!root1 && !root2) return true;
  if(!root1 || !root2 || root1.val !== root2.val) return false;
  if(root1.val !== root2.val) return false;
  return helper(root1.left, root2.right) && helper(root1.right, root2.left) 
}

const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

// console.log('alan->', isSymmetric(tree));
console.log('alan->', isSymmetric(tree2));