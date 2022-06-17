/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * 环形链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnwzei/
 * @param {ListNode} head
 * @return {boolean}
 */
// 双指针法
let hasCycle = function(head) {
    let fast = head, slow = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
};

// 使用集合
let hasCycle2 = function(head) {
    let map = new Map();
    let temp = head;
    while(temp !== null) {
        if(map.has(temp)) return true;
        map.set(temp, 0);
        temp = temp.next;
    }
    console.log(map);
    return false;
};

console.log(hasCycle2(linkedList));
