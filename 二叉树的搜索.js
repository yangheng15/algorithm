/**
 * 二叉树的搜索
 * 树的搜索，图的搜索，爬虫的搜索，搜索引擎的爬虫算法
 * 深度优先算法： 更适合探索未知
 * 广度优点算法： 更适合探索局域
 */
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
// console.log(a);
//深度优先
// deepSearch(a);
function deepSearch(root, target) {
    if (root === null) return false;
    if(root.value === target) return true;
    const left = deepSearch(root.left, target);
    const right = deepSearch(root.right, target);
    return left || right
}
// console.log(deepSearch(a, 'f'));

//广度优先
function f1(root, target) {
    if(root === null) return false;
    var queue = [root];
    var result = false;;
    while(queue.length) {
        var item = queue.shift();
        console.log(item.value);
        if(item.value === target) {
            result = true;
            break
        }
        if(item.left) {
            queue.push(item.left);
        }
        if(item.right) {
            queue.push(item.right);
        }
    }
    return result
}
console.log(f1(a, 'n'));