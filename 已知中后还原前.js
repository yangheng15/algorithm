class Node {
    constructor(val) {
        this.value = val;
    }
    left = null;
    right = null;
}
const hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];
const zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];

function f1(hou, zhong) {
    console.log(hou, '----', zhong);
    if(hou === null || zhong === null || (hou.length !== zhong.length) || hou.length === 0 || zhong.length === 0) return null;
    const rootVal = hou[hou.length - 1];
    const root = new Node(rootVal);
    const index = zhong.indexOf(rootVal);
    const zhongLeft = zhong.slice(0, index);
    const zhongRight = zhong.slice(index + 1, zhong.length);
    const houLeft = hou.slice(0, index);
    const houRight = hou.slice(index, hou.length - 1);
    root.left = f1(houLeft, zhongLeft);
    root.right = f1(houRight, zhongRight);
    return root;
}
console.log(f1(hou, zhong));