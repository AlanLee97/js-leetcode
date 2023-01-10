// 242. 有效的字母异位词 https://leetcode-cn.com/problems/valid-anagram/

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
let isAnagram = function(s, t) {
  // 两种特殊情况
  if (s === t) return true;
  if (s.length !== t.length) return false;

  // 思路：
  // 1. 将字符串的每个字符存入map中，以字符为键，出现次数为值
  let sMap = createMap(s);
  let tMap = createMap(t);
  
  // 2. 遍历其中一个map，比较键对应的值
  for (const [key, value] of sMap) {
    if(tMap.get(key) !== value) {
      return false;
    }
  }

  return true;
};

function createMap(str) {
  let map = new Map();
  str.split('').forEach(item => {
    let count = 0;
    if(map.get(item)) {
      count += map.get(item)
    }
    map.set(item, 1 + count);
  })
  return map;
}

console.log(isAnagram('abacc', 'bnanc'));