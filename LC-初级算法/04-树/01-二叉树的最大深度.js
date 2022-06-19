
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * 二叉树的最大深度
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnd69e/
 * @param {TreeNode} root
 * @return {number}
 */
 // [3,9,20,null,null,15,7]
let maxDepth = function(root) {
    if(root === null) return 0;
    let leftDeep = maxDepth(root.left) + 1;
    let rightDeep = maxDepth(root.right) + 1;
    return Math.max(leftDeep, rightDeep);
};