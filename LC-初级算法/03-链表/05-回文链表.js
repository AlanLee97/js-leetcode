/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 let linkedList = new ListNode(1, new ListNode(2, null));


 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

/**
 * 回文链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnv1oc/
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function(head) {
    let arr = [];
    let temp = head;
    while(temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }
    if(arr.length === 1) {
        return true;
    }
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        if(arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
};

// 快慢指针法
// 1. 通过快慢指针，找到中间的节点
// 2. 然后反转后半部分链表
// 3. 再逐一对比两个链表的值是否相等
//          v
// [1,1,2,1]
//      ^

//     ,_,v
// [1,2]
//    ^
let isPalindrome2 = function(head) {
    debugger;
    let fast = head, slow = head;
    // 找到中间的节点
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    // 找到中间的节点(链表长度为奇数时)
    if(fast !== null) {
        slow = slow.next;
    }
    // 反转后半部分链表
    slow = reverseList(slow);

    fast = head;
    while(slow !== null) {
        if(fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
};

function reverseList(head) {
    let temp = head;
    let newList = null;
    while(temp !== null) {
        let headNode = temp;
        temp = temp.next;

        headNode.next = newList;
        newList = headNode;
    }
    return newList;
}

console.log(isPalindrome2(linkedList));