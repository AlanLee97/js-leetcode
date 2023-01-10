// 804. 唯一摩尔斯密码词 https://leetcode-cn.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
let uniqueMorseRepresentations = function(words) {
    let map = new Map();
    let mosrseMap = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    mosrseMap.forEach((item, index) => {
        map.set(String.fromCharCode(97+index), item);
    });
    let codeSet = new Set();
    words.forEach(item => {
        let code = '';
        for(let i = 0; i < item.length; i++) {
            code += map.get(item[i]);
        }
        codeSet.add(code);
    })
    return codeSet.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));
