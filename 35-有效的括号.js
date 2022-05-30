// 20. 有效的括号 https://leetcode.cn/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s = '') {
    debugger;
    if (s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if (str === '(' || str === '[' || str === '{') {
            stack.push(str);
        } else {
            if (str === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (str === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (str === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                } else {
                    return false;
                }
            }

        }

    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};



/**
 * v2
 * @param {string} s
 * @return {boolean}
 */
let isValid2 = function (s = '') {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let str = s[i];
        if (str === '(' || str === '[' || str === '{') {
            stack.push(str);
        } else {
            let top = stack[stack.length - 1];
            switch (str) {
                case ')':
                    if (top !== '(') return false; 
                    stack.pop();
                    break;
                case ']':
                    if (top !== '[') return false; 
                    stack.pop();
                    break;
                case '}':
                    if (top !== '{') return false; 
                    stack.pop();
                    break;
            }

        }

    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

/**
 * v3
 * @param {string} s
 * @return {boolean}
 */
 let isValid3 = function (s = '') {
     debugger;
    if (s.length % 2 !== 0) return false;
    let stack = [];
    let map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');
    for (let str of s) {
        let top = stack[stack.length - 1];
        if(map.has(str)){
            if(!stack.length === 0 || top !== map.get(str)) return false;
            stack.pop();
        }else {
            stack.push(str);
        }

    }
    return stack.length === 0;
};

console.log(isValid3("()[]{}"))