/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除链表中的节点
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnarn7/
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 思路：
// 1. 直接用后面的节点覆盖给定的节点
const deleteNode = function(node) {
  node.val = node.next.val
  node.next = node.next.next
};