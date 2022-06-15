/**
 * 删除链表中的节点
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnarn7/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
let deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

deleteNode();
