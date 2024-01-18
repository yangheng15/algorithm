/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length === 0) return null
    let min = this.stack[0];
    for (let i = 0; i < this.stack.length; i++) {
        const num = this.stack[i];
        if(min > num) {
            min = num;
        }
    }
    return min;
};

var obj = new MinStack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(param_3, param_4);