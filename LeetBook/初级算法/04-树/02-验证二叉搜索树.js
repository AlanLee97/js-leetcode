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

const isValidBST = function (root) {
  return handleValidBST(root)
};

function handleValidBST(root, min = -Infinity, max = Infinity) {
  if(!root) return true;
  if(root.val <= min || root.val >= max) return false;
  return handleValidBST(root.left, min, root.val) && handleValidBST(root.right, root.val, max);
}

// function handleValidBST(root, preRoot, isLeft = false) {
//   if(root === null) return true
//   let flag = true
//   if(root.left) {
//     let left = root.left
//     if(root.val <= left.val) return false
//     if(root.val > left.val && preRoot && preRoot.val >= left.val && !isLeft) return false
//     if(left.left) {
//       flag = handleValidBST(left, root, true)
//       if(!flag) return false
//     }
//     if(left.right) {
//       flag = handleValidBST(left, root, true)
//       if(!flag) return false
//     }
//   }
//   if(root.right) {
//     let right = root.right
//     if(root.val >= right.val) return false
//     if(root.val < right.val && preRoot && preRoot.val < right.val && isLeft) {
//       return false
//     } else {
//       flag = true
//     }
//     if(right.right) {
//       flag = handleValidBST(right, root)
//       if(!flag) return false
//     }
//   }
//   return flag
// }


const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const root2 = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
const root3 = new TreeNode(1, new TreeNode(1, null, null), null);
const root4 = new TreeNode(5, new TreeNode(4, null, null), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
const root5 = new TreeNode(32, new TreeNode(26, new TreeNode(19, null, new TreeNode(27)), null), new TreeNode(47, null, new TreeNode(56)));
const root6 = new TreeNode(3, new TreeNode(1, new TreeNode(0), new TreeNode(2)), new TreeNode(5, new TreeNode(4), new TreeNode(6)));

// console.log('root', root);
// console.log(isValidBST(root));
// console.log(isValidBST(root2));
// console.log(isValidBST(root3));
// console.log('root5', root5);
// console.log('root6', root6);
console.log(isValidBST(root5));
console.log(isValidBST(root6));
