/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 合并两个有序链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnbp2/
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 思路：
// 1. 把两个链表的节点放到一个数组中
// 2. 数组排序
// 3. 再把数组中的节点放到新的链表中
const mergeTwoLists = function(list1, list2) {
  let arr = [];
  walkList(list1, node => { arr.push(node) });
  walkList(list2, node => { arr.push(node) });
  arr.sort((a, b) => a.val > b.val ? 1 : -1);

  if(arr.length === 0) return null;

  let list;
  arr.reverse().forEach(node => {
    if(!list) {
      list = node;
    } else {
      node.next = list;
    }
    list = node;
  })
  return list;
};

function walkList(list, callback = () => {}) {
  let temp = list;
  while(temp) {
    const node = new ListNode(temp.val);
    callback(node);
    temp = temp.next;
  }
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log('alan->', {list1, list2})

console.log('alan->mergeTwoLists', mergeTwoLists(list1, list2))
