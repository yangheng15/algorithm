// https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function (digits) {
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    if (!digits) {
        return [];
    } else if (digits.length === 1) {
        return map[digits].split('');
    }
    const digitsArr = digits.split(''); // ['2', '3']
    const arr = [];
    digitsArr.forEach((num) => {
        arr.push(map[num]);
    });

    const combine = (arr) => {
        let temp = [];
        for (let i = 0; i < arr[0].length; i++) {
            for(let j = 0; j < arr[1].length; j ++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp);
        if(arr.length > 1) {
            return combine(arr);
        }
        return temp;
    };
    return combine(arr);
};
console.log(letterCombinations('234'));
