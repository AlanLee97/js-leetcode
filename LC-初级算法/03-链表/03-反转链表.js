/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 反转链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnhm6/
 * @param {ListNode} head
 * @return {ListNode}
 */
let reverseList = function(head) {
    if(head === null) {
        return null;
    }
    let tempNode = head;
    let arr = [];
    while(tempNode !== null) {
        // console.log(tempNode);
        arr.push(tempNode);
        tempNode = tempNode.next;
    }

    let reverseArr = arr.reverse();
    let tempList = reverseArr[0];
    let tempNode2 = tempList;
    reverseArr.forEach((item, index) => {
        tempNode2.next = item;
        tempNode2 = tempNode2.next;
        if(index === reverseArr.length - 1) {
            tempNode2.next = null;
        }
    });
    return tempList;

};
let linkedList = new ListNode(1, new ListNode(2, new ListNode(3, null)));


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 头插法
let reverseList2 = function(head) {
    let tempList = null;
    let tempNode = head;
    while(tempNode !== null) {
        let newNode = tempNode;
        tempNode = tempNode.next;

        // 新节点指向新链表，作为新链表的头节点
        newNode.next = tempList;
        // 此时newNode为新链表，需赋值给tempList，供下一轮循环使用
        tempList = newNode;
    }
    return tempList;
};

// 使用 栈
let reverseList3 = function(head) {
    let tempNode = head;
    let stack = [];
    while(tempNode !== null) {
        stack.push(tempNode);
        tempNode = tempNode.next;
    }
    let newList = stack.pop();
    let tailNode = newList;
    while(stack.length !== 0) {
        tailNode.next = stack.pop();
        tailNode = tailNode.next;
    }
    tailNode.next = null;
    return newList;
};

reverseList3(linkedList);

