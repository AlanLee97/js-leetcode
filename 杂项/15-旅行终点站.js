// 1436. 旅行终点站 https://leetcode-cn.com/problems/destination-city/

/**
 * @param {string[][]} paths
 * @return {string}
 */
let destCity = function(paths = []) {
  if(paths.length === 1) {
    return paths[0][1];
  }
  let map = new Map();
  let res = '';
  paths.flat().map((item, index) => {
    map.set(item, {
      index: index % 2,
      count: map.get(item) ? (map.get(item).count + 1) : 1
    });
  });
  console.log(map);
  for (const [key, value] of map) {
    if(value.count === 1 && value.index === 1) res = key;
  }
  return res;
};
console.log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]))
console.log(destCity([["A","Z"]]))