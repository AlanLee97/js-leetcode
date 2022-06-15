/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 删除链表的倒数第N个节点
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn2925/
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 let removeNthFromEnd = function(head, n) {
    if(head.next === null) {
        return null;
    }
    let preNode = head;

    const length = node => {
        let tempNode = node;
        let len = 0;
        while(tempNode !== null) {
            tempNode = tempNode.next;
            len++;
        }
        return len;
    }

    let last = length(head) - n;
    if(last === 0) {
        return head.next;
    }
    // 找前一个节点
    for(let i = 0; i < last - 1; i++) {
        preNode = preNode.next;
    }
    preNode.next = preNode.next.next;

    return head;
};


// 双指针法
//          v
// [1,2,3,4,5]
//      ^
let removeNthFromEnd2 = function(head, n) {
    let fast = head, slow = head;
    // fast指针先移动n个位置，使得fast指针和slow指针产生一定的间隔
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if(fast === null) {
        return head.next;
    }

    // 同时移动fast指针和slow指针
    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow是目标节点的前一个节点
    slow.next = slow.next.next;
    return head;
};
