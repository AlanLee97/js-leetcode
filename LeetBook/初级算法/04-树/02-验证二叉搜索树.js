/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 验证二叉搜索树
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn08xg/
 * @param {TreeNode} root
 * @return {boolean}
 */

// todo
const isValidBST = function (root) {
  if(root === null || root.left === null && root.right === null) return true;
  

  // debugger;
  return calcValidBST(root, -Infinity, Infinity);
};

function calcValidBST(root, min, max) {
  // debugger
  let flag = true;
  if(root.left && root.right) {
    flag = root.left.val < root.right.val && root.val < root.right.val && root.left.val < root.val;
  } else if(root.left) {
    flag = root.left.val < root.val;
  } else if(root.right) {
    flag = root.val < root.right.val;
  } else if(min && max) {
    flag = root.val > min && root.val < max;
  }

  if(!flag) return false;


  if(root.left) {
    flag = calcValidBST(root.left, min < root.val ? min : root.val, max > root.left.val ? max : root.left.val);
    if(!flag) return false;
  }
  if(root.right) {
    flag = calcValidBST(root.right, min, max);
    if(!flag) return false;
  }

  return flag;
}


const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root2 = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
const root3 = new TreeNode(1, new TreeNode(1, null, null), null);
const root4 = new TreeNode(5, new TreeNode(4, null, null), new TreeNode(6, new TreeNode(3), new TreeNode(7)));

// console.log('root', root);
// console.log('root2', root2);
console.log(isValidBST(root));
console.log(isValidBST(root2));
console.log(isValidBST(root3));
console.log(isValidBST(root4));
