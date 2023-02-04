// 遍历链表
function walkList(list, callback = () => {}) {
  let temp = list;
  while(temp) {
    const node = new ListNode(temp.val);
    callback(node);
    temp = temp.next;
  }
}

// 在链表尾部追加节点
function appendNode(list, node) {
  let temp = list;
  while(temp) {
    if(temp.next === null) {
      temp.next = node;
      break;
    }
    temp = temp.next;
  }
}

// 头插法添加节点到链表
function insertNodeToHead(list, node) {
  let tempList = list;
  if(!tempList) {
    tempList = node;
  } else {
    node.next = tempList;
  }
  tempList = node;
}

// 链表转数组
function listToArray(list) {
  if(!list) return [];
  let arr = []
  walkList(list, node => { arr.push(node) });
  return arr;
}

// 获取链表长度
function listLength(list) {
  if(!list) return 0;
  return listToArray(list).length;
}
