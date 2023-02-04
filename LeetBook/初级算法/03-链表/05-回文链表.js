/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 回文链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnv1oc/
 * @param {ListNode} head
 * @return {boolean}
 */

// 思路：
// 1. 将链表转成数组，把节点存到数组中
// 2. 再判断数组是否是回文数组
const isPalindrome = function (head) {
  // 链表转数组
  function listToArray(list) {
    if (!list) return [];
    let arr = []
    walkList(list, node => { arr.push(node) });
    return arr;
  }

  // 遍历链表
  function walkList(list, callback = () => { }) {
    let temp = list;
    while (temp) {
      const node = new ListNode(temp.val);
      callback(node);
      temp = temp.next;
    }
  }
  const arr = listToArray(head);
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i].val !== arr[arr.length - i - 1].val) return false;
  }
  return true
};

console.log('alan->listToArray', listToArray(list))
console.log('alan->listLength', listLength(list))

const list2 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, null))));
console.log('alan->isPalindrome', isPalindrome(list))
console.log('alan->isPalindrome', isPalindrome(list2))