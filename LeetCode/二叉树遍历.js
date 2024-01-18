// class Node {
//     constructor(val) {
//         this.val = val;
//     }
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// a.left = c;
// a.right = b;
// c.left = f;
// c.right = g;
// b.left = d;
// b.right = e;
// // console.log(a);
// // 前序遍历
// function qian(root) {
//     if(!root) return;
//     console.log(root.val);
//     qian(root.left);
//     qian(root.right);
// }
// // qian(a);

// // 中序
// function zhong(root) {
//     if(!root) return;
//     zhong(root.left);
//     console.log(root.val);
//     zhong(root.right);
// }
// // zhong(a);

// // 后序
// function hou(root) {
//     if(!root) return;
//     hou(root.left);
//     hou(root.right);
//     console.log(root.val);
// };
// hou(a);

// var arr = [1,2,3];
// arr.forEach(it => {
//     if(it === 2) {
//         return false;
//     }
//     console.log(it);
// })

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i], nums[j]);
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([9987, 9988, 9989, 9990, 9991, 9992, 9993, 9994, 9995, 9996, 9997, 9998, 9999, 10000], 19999));
