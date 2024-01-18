/**
 * 
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。



作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/queue-stack/genw3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
// var dailyTemperatures = function(T) {
//     var stack = [];
//     var outPut = [];
//     for (let i = 0; i < T.length; i++) {
//         if(stack.length === 0) {
//             stack.push(T[i]);
//             continue;
//         }
//         const stackTop = stack[0];
//         console.log(stackTop, T[i]);
//         if(stackTop < T[i]) {
//             // stack.push(T[i])
//             // console.log(stackBottom, T[i]);
//             outPut.push(stack.length);
//             stack = [];
//             stack.push(T[i])
//         }else {
//             stack.push(T[i])
//         }

//     }
//     return outPut;
// };

var dailyTemperatures = function (T) {
    const stack = []; // 初始化一个栈
    const len = T.length; // 缓存数组的长度
    const res = new Array(len).fill(0); // 生成返回结果的数组，填充0
    for (let i = 0; i < len; i++) {
        // 若栈不为空，且当前温度开始上升时，就表示观察到更高的气温了
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            // 获取低气温的索引，并出栈，因为这里会在结果中填充等待的天数，后面也不会用到这个值了
            const topIndex = stack.pop();
            console.log(topIndex);
            // 在对应的索引位置填充等待的天数
            res[topIndex] = i - topIndex;
        }
        // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
        stack.push(i);
    }
    return res;
};
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
