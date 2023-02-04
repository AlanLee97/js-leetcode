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

// 思路：
// 思路1：找到指定节点的前一个节点preNode，然后preNode直接指向当前节点的next，即preNode.next = curNode.next.next
// 思路2：新建一个listnode，遍历原listnode，非指定删除的节点就拼接到新建的listnode，再返回新的listnode

// >> [0,1,2,3,4] 1
// << [0,1,2,4]

// >> [1] 1
// << []

// >> [1,2] 2
// << [2]
const removeNthFromEnd = function (head, n) {
  let temp = head;
  let count = len(head);
  if(count === 1) return null;
  let i = 0;
  while(temp && temp.next !== null) {
    // debugger
    // 目标节点的前一个
    if(count - n - 1 === i) {
      temp.next = temp.next.next;
      break;
    }
    // 前一个节点为null，即删除头节点
    if(count - n - 1 === -1) {
      temp = temp.next;
      return temp;
    }
    temp = temp.next;
    i++;
  }
  console.log('alan->head', head)
  return head;
};

function len(head) {
  if(!!!head) return 0;

  let count = 1;
  let temp = head;
  while(temp.next !== null) {
    count++;
    temp = temp.next;
  }
  return count;
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const node4 = new ListNode(4, null)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)
const list = new ListNode(0, node1)

// [0,1,2,3,4]
console.log('alan->removeNthFromEnd', removeNthFromEnd(list, 2))


// 思路2
const removeNthFromEnd2 = function (head, n) {
  const count = len(head);
  const list = new ListNode();
  list.val = head.val;

  const addNode = (node) => {
    let temp = list;
    while(temp) {
      if(temp.next === null) {
        temp.next = node;
        break;
      }
      temp = temp.next;
    }
  }
  let temp = head;
  let i = 0;
  while(temp && temp.next !== null) {
    debugger
    if(count - n !== i) {
      addNode(new ListNode(temp.val, null));
    }
    temp = temp.next;
    i++;
  }
  return list.next;
}

console.log('alan->list2', removeNthFromEnd2(list, 1));
