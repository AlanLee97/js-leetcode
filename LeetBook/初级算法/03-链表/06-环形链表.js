/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 环形链表
 * https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnwzei/
 * @param {ListNode} head
 * @return {boolean}
 */

// 思路：
// 思路1：快慢指针，快指针走2步，慢指针走1步
// 思路2：逐个删除，最后一个节点如果是自己指向自己，说明是环
// 思路3：使用set，把节点放到set中，如果节点存在，说明是环

// 思路1
const hasCycle = function (head) {
  if (!head) return false;
  let fast = head.next;
  let slow = head;

  while (fast !== null &&
    slow !== null &&
    fast.next &&
    fast.next.next &&
    slow.next) {
    // 快慢指针相遇
    if (fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};

// 思路2
const hasCycle2 = function (head) {
  if (head === null || head.next === null) return false;
  //如果出现head.next = head表示有环
  if (head.next === head) return true;
  const nextNode = head.next;
  //当前节点的next指向他自己，相当于把它删除了
  head.next = head;
  //然后递归，查看下一个节点
  return hasCycle2(nextNode);
};

// 思路3
const hasCycle3 = function (head) {
  debugger;
  if (head === null || head.next === null) return false;
  const set = new Set();
  let temp = head;
  while(temp) {
    if(set.has(temp)) return true;
    set.add(temp);
    temp = temp.next;
  }
  return false;
};

const n4 = new ListNode(4, null);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);
n4.next = n2;
const clist = n1;

console.log('alan->clist', clist)

// console.log('alan->hasCycle list', hasCycle(list))
// console.log('alan->hasCycle clist', hasCycle(clist))

// console.log('alan->hasCycle2 list', hasCycle2(list))
// console.log('alan->hasCycle2 clist', hasCycle2(clist))

console.log('alan->hasCycle3 list', hasCycle3(list))
console.log('alan->hasCycle3 clist', hasCycle3(clist))