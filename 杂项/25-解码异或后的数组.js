// 1720. 解码异或后的数组 https://leetcode-cn.com/problems/decode-xored-array/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
// 执行用时：92 ms
// 内存消耗：48 MB
let decode = function(encoded, first) {
  let ans = [first];
  encoded.forEach(item => {
    let x = item ^ first;
    first = x;
    ans.push(x);
  })
  return ans;
};

// 执行用时：84 ms
// 内存消耗：47.8 MB
let decode2 = function(encoded, first) {
  let f = first;
  encoded.forEach((item, index) => {
    encoded[index] = item ^ first;
    first = encoded[index];
  });
  encoded.unshift(f);
  return encoded;
};

// 执行用时：84 ms
// 内存消耗：47.3 MB
let decode3 = function(encoded, first) {
  encoded.unshift(first);
  for(let i = 1; i < encoded.length; i++) {
    encoded[i] = encoded[i] ^ first;
    first = encoded[i];
  }
  return encoded;
};
console.log(decode3([6,2,7,3], 4))
