function Node(value) {
    this.value = value;
    this.next = null
}
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

digui(nizhi(a));
function digui(root) {
    if(!root) return;
    console.log(root.value);
    digui(root.next);
}

// function nizhi(root) {
//     if(root.next.next === null) {
//         root.next.next = root; 
//         return root.next; // 返回最后一个也就是逆向链表的头部
//     }else {
//         let result = nizhi(root.next);
//         root.next.next = root;
//         root.next = null;
//         return result;
//     }
// }

// console.log(a.next.next.next.value);

// bianNode(a);
// function bianNode(root) {
//     var temp = root;
//     while(true) {
//         if(temp !== null ) {
//             console.log(temp.value);
//         }else {
//             break;
//         }
//         temp = temp.next;
//     }
// }


// var arr = [1,2,3,4,5,6];
// bianArr(arr);
// function bianArr(arr) {
//     if(!Array.isArray(arr)) return;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }