// 13.罗马数字转整数 https://leetcode-cn.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
  let map = new Map();
  map.set('I', 1); // 可放左边
  map.set('V', 5);
  map.set('X', 10); // 可放左边
  map.set('L', 50);
  map.set('C', 100); // 可放左边
  map.set('D', 500);
  map.set('M', 1000);

  let res = 0;
  let strArr = s.split('');
  let len = strArr.length;
  let curStr = '';
  /**
   * 思想处理I、X、C放在左边的情况
   * 该解法只能通过大概90%的用例，待优化
   */
  for(let i = 0; i < len; i++) {
    debugger;
    curStr = strArr.shift();
    if(curStr === undefined) return res;

    if(curStr === 'I' || curStr === 'X' || curStr === 'C') {
      let nextStr = strArr.shift();
      if(map.get(nextStr) > map.get(curStr)) {
        res += map.get(nextStr) - map.get(curStr)
      }else if (curStr === nextStr) {
        res += map.get(curStr) + map.get(nextStr);
      }else {
        if(nextStr === undefined && !curStr) return res;
        res += map.get(curStr) + (nextStr ? map.get(nextStr) : 0);
      }
    }else {
      res += map.get(curStr)
    }
  }
  return res;
}

// 官方解法
let romanToInt2 = function(s) {
  let map = new Map();
  map.set('I', 1); // 可放左边
  map.set('V', 5);
  map.set('X', 10); // 可放左边
  map.set('L', 50);
  map.set('C', 100); // 可放左边
  map.set('D', 500);
  map.set('M', 1000);

  let res = 0;
  let len = s.length;
  /**
   * 思路
   * 当后一个值大于当前值时，总和要减去当前值，再加上后一个值
   * 当后一个值小于当前值时，总和直接加上当前值
   */
  for(let i = 0; i < len; i++) {
    if(i < (len - 1) && map.get(s[i]) < map.get(s[i+1])) {
      res -= map.get(s[i])
    }else {
      res += map.get(s[i])
    }
  }
  return res;
}


// console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt2("MDCCCLXXXIV")) // 
// 1000 500 100 100 100 50 10 10 10 4