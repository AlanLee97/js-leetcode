/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

let linkedList1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let linkedList2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


/**
 * 合并两个有序链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnbp2/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function(list1, list2) {
    let tempNode = list1;

    // [1,2,4]
    // [1,3,4]
    while(tempNode !== null) {
        let tempNode2 = list2;
        while(tempNode2 !== null) {
            if(tempNode.val <= tempNode2.val) {
                let helper = tempNode;
                tempNode2.next 
            }
            tempNode2 = tempNode2.next;
        }
        tempNode = tempNode.next;
    }
};

mergeTwoLists(linkedList1, linkedList2);

