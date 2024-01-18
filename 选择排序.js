function compare(a, b) {
    if (a < b) return true;
    else return false;
}

function exchange(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

var arr = [4, 1, 6, 9, 3, 2, 8, 7];
// sort(arr);
// 选择排序
// 选择排序 内层循环 没圈选择出最大和数组的最后一位进行交换
function sort(arr) {
    for (let j = 0; j < arr.length; j++) {
        let index = 0;
        for (let i = 0; i < arr.length - j; i++) {
            if (compare(arr[index], arr[i])) {
                index = i;
            }
        }
        exchange(arr, index, arr.length - 1 - j);
    }
    console.log(arr);
}

//任何一种排序算法没有优劣之分，只有是否合适的场景 
/**
 * 越混乱 =》 快速排序
 * 越有顺序 =》 冒泡排序，选择排序
 */