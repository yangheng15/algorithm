// 非算法排序
var arr = [4, 1, 6, 9, 3, 2, 8, 7]; // 1, 3, 2
// var newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(getMin(arr));
// }
// console.log(newArr);

// function getMin(arr) {
//     var index = -1;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== -1 && arr[index] > arr[j] || arr[j] !== -1 && index === -1) {
//             index = j;
//         }
//     }
//     const result = arr[index];
//     arr[index] = -1;
//     console.log(arr, result);
//     return result;
// }

// 冒泡排序   排序不是比较大小，本质是比较和交换

function compare(a, b) {
    // 比较之后得出是否需要交换
    if (a > b) return true;
    else return false;
}

function exchange(arr, a, b) {
    // 将数组中的a，b进行交换
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function sort(arr) {
    // sort 可以是冒泡也可以是选择也可以是其他的排序
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
    console.log(arr);
}
sort(arr);