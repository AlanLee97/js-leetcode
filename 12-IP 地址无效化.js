// 1108. IP 地址无效化 https://leetcode-cn.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddr = function(address = '') {
  let res = '';
  for(let i = 0; i < address.length; i++) {
    res += (address[i] === '.' ? '[.]' : address[i]);
  }
  return res;
};

let defangIPaddr2 = function(address = '') {
  return address.replace(/\./g, '[.]');
};
console.log(defangIPaddr2('1.1.1.1'))