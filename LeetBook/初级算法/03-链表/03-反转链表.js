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

// 思路：
// 思路1：新建一个listnode，遍历原listnode，把每一个节点用头插法拼接新的listnode
// 思路2：使用stack，遍历listnode，把节点存到stack中，然后再遍历stack，把节点存到新的listnode
const reverseList = function(head) {
  if(head === null) return head;

  let newList;
  let temp = head;
  while(temp) {
    const node = new ListNode(temp.val);
    if(!newList) {
      newList = node;
    } else {
      node.next = newList;
    }
    temp = temp.next;
    newList = node;
  }
  return newList;
};

// 思路2
const reverseList2 = function(head) {
  if(head === null) return head;

  let newList;
  let temp = head;
  let stack = [];
  while(temp) {
    const node = new ListNode(temp.val);
    stack.push(node);
    temp = temp.next;
  }

  const addNode = (node) => {
    let temp = newList;
    while(temp) {
      if(temp.next === null) {
        temp.next = node;
        break;
      }
      temp = temp.next;
    }
  }

  stack.reverse().forEach(node => {
    if(!newList) {
      newList = node;
    } else {
      addNode(node);
    }
  })
  return newList;
};

console.log('alan->list', list);
console.log('alan->reverseList', reverseList(list));
console.log('alan->reverseList2', reverseList2(list));