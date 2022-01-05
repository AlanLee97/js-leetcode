// 771. 宝石与石头 https://leetcode-cn.com/problems/jewels-and-stones/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let numJewelsInStones = function(jewels, stones) {
  /**
   * 思路
   * 把石头记录到hash表中
   * 再根据宝石的数量去表里取石头数量
   */
  let map = new Map();
  for(let i = 0; i < stones.length; i++) {
    let value = map.get(stones[i]);
    map.set(stones[i], value ? value + 1 : 1);
  }
  let count = 0;
  for(let i = 0; i < jewels.length; i++) {
    if(stones.includes(jewels[i])) {
      count += map.get(jewels[i]);
    }
  }
  return count;
};

console.log(numJewelsInStones('aA', 'zz')) 