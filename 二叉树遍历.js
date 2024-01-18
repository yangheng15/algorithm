class Node {
    left = null;
    right = null;
    constructor(val) {
        this.value = val;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = c;
c.left = f;
c.right = g;
a.right = b;
b.left = d;
b.right = e;
console.log(a);
//前序遍历
qianxu(a);
function qianxu(root) {
    if (root === null) return;
    console.log(root.value);
    qianxu(root.left);
    qianxu(root.right);
}
//中序遍历
zhongxu(a);
function zhongxu(root) {
    if (root === null) return;
    zhongxu(root.left);
    console.log(root.value);
    zhongxu(root.right);
}
//后序遍历
houxu(a);
function houxu(root) {
    if (root === null) return;
    houxu(root.left);
    houxu(root.right);
    console.log(root.value);
}