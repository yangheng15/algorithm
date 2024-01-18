var arr = [4, 1, 6, 9, 3, 1, 2, 8, 7];
console.log(quickSort(arr));
function quickSort(arr) {
    if (arr === null || arr.length === 0) return [];
    let temp = arr[0];
    let left = [],
        right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < temp) left.push(arr[i]);
        else right.push(arr[i]);
    }
    console.log(left, right);
    left = quickSort(left);
    right = quickSort(right);
    return left.concat(temp, right);
}
/**
 * （1）在数据集之中，选择一个元素作为"基准"（pivot）。

　　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。

　　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 */