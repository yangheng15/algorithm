const qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
const zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']
class Node{
    left = null;
    right = null;
    constructor(val) {
        this.value = val
    }
}

function f1(qian, zhong) {
    // console.log(qian, zhong);
    if(qian === null || zhong === null || (qian.length !== zhong.length) || qian.length === 0 || zhong.length === 0) return null;
    const root = new Node(qian[0]);
    const index = zhong.indexOf(qian[0]);
    const qianLeft = qian.slice(1, index + 1);
    const zhongLeft = zhong.slice(0, index);
    const qianRight = qian.slice(index + 1, qian.length);
    const zhongRight = zhong.slice(index + 1, zhong.length);
    root.left = f1(qianLeft, zhongLeft);
    root.right = f1(qianRight,zhongRight)
    return root;
}
console.log(f1(qian, zhong));