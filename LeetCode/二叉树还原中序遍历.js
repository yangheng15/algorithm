
function Node (val) {
    this.val = val;
    this.next = null;
}

const root = new Node(1);
const b = new Node(2);
const c = new Node(3);
root.right = b;
b.left = c;

var inorderTraversal = function (root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    };
    inorder(root);
    return res;
};

console.log(inorderTraversal(root));

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
