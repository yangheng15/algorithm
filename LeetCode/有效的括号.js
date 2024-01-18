/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。


作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/queue-stack/g9d0h/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s === null || s.length < 1 || s.length > 10000) return false;
    var arr = s.split('');
    var stack = [];
    for (let i = 0; i < arr.length; i++) {
        if(stack.length === 0) {
            stack.push(arr[i]);
            continue
        }
        if(isReg(stack[stack.length - 1], arr[i])) {
            stack.pop();
        }else {
            stack.push(arr[i])
        }
        
    }
    if(stack.length > 0) return false;
    else return true
};

function isReg(left, right) {
    return (left === '(' && right === ')') || (left === '[' && right === ']') || (left === '{' && right === '}')
}

console.log(isValid('([)]'));