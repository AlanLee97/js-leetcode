// 1678. 设计 Goal 解析器 https://leetcode-cn.com/problems/goal-parser-interpretation/

/**
 * @param {string} command
 * @return {string}
 */
let interpret = function(command) {
  let res = '', tempRes = '';
  let map = new Map();
  map.set('G', 'G');
  map.set('()', 'o');
  map.set('(al)', 'al');
  for(let i = 0; i < command.length; i++) {
    tempRes += command[i];
    if(map.get(tempRes)) {
      res += map.get(tempRes);
      tempRes = '';
    }
  }
  return res;
};

let interpret2 = function(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};
console.log(interpret2('G()()()()(al)'))