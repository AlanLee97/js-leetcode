// 1773. 统计匹配检索规则的物品数量 https://leetcode-cn.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
let countMatches = function(items, ruleKey, ruleValue) {
  let count = 0;
  let index = 0;
  items.map(item => {
    switch(ruleKey) {
      case "type":
        index = 0;
        break;
      case "color":
        index = 1;
        break;
      case "name":
        index = 2;
        break;
    }
    if(item[index] === ruleValue) count += 1;
  })

  return count;
};

let arr = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"

console.log(countMatches(arr, ruleKey, ruleValue))