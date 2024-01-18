// class Stack {
//     constructor() {
//         this.arr = [];
//     }
//     push(val) {
//         this.arr.push(val)
//     }
//     pop() {
//         return this.arr.pop()
//     }
// }
// let arr = new Stack();
// arr.push(1)
// console.log(arr);
// console.log(arr.pop());


class Queue {
    arr = [];
    push(val) {
        this.arr.push(val);
    }
    pop() {
        return this.arr.shift();
    }
}
const arr = new Queue()
arr.push(1);
arr.push(2);
console.log(arr);
arr.pop();
console.log(arr);
