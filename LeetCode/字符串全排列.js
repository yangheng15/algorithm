
function permutation(str) {
    if(str.length == 0) {
        return [];
    }
    var result = [];
    var sortTemp = '';
    var arr = str.split('');
    // var len = arr.length;
    var result = sortString(arr, sortTemp, result);
    return result;

    function sortString(arr, sortTemp, res) {
        console.log(arr, sortTemp, res);
        if(arr.length == 0) {
            return res.push(sortTemp);
        } else {
            let isRepeat = {};
            for(let i = 0; i < arr.length; i++) { // 不要用 len
                if(!isRepeat[arr[i]]) {
                    let temp = arr.splice(i, 1)[0]; // i 取出第i个字符作为第一个字符
                    sortTemp += temp;
                    sortString(arr, sortTemp, res); // 固定第一个字符的剩下字符的全排列已完成 [b, c], 'a', []
                    arr.splice(i, 0, temp); // i 补全 恢复原字符串
                    sortTemp = sortTemp.slice(0, sortTemp.length - 1); // 清空sortTemp: 每次截掉字符串中的最后一个字符
                    isRepeat[temp] = true; // 相同的字符便不再在第一个字符中固定并对剩下的字符进行全排列了
                }
            }    
        }
        return res;
    }
}
permutation('abc')