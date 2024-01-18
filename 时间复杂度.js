// 平方阶（嵌套了两层） 嵌套循环越深入 O(n平方) 就会变成o(n立方) 以此类推
function pingfang(n) {
    var i = 0;
    for (x = 1; i <= n; x++) {
        for (i = 1; i <= n; i++) {
            j = i;
            j++;
        }
    }
}
pingfang(2);

// 指数阶 斐波那契数列 这个数列从第 3 项开始，每一项都等于前两项之和  1 1 2 3 5 8  请输出第n项
function feibo(n) {
    if(n === 1 || n === 2) {
        return 1;
    }
    return feibo(n - 1) + feibo(n - 2);
}
console.log(feibo(4));;
 // 3 执行 3   4  执行 1 + 3 + 1 = 5