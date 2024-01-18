const obj = {
    '/a/b/c/d': 1,
    '/a/b/c/e': 1,
    '/a/b/c/d1': 1,
    '/a/b/c2/d': 1,
    '/a/b/c1': 1,
    '/a/b/c3': 1,
    '/a1/b/f': 1,
};
const res = {};
const bianli = function (arr, val, res) {
    const key = arr.splice(0, 1);
    if(!key) return;
    if (!res[key]) {
        res[key] = arr.length === 0 ? val : {};
    }
    if(arr.length) {
        bianli(arr, val, res[key]);
    }
};
for (const key in obj) {
    const keyArr = key.split('/').filter(Boolean);
    bianli(keyArr, obj[key], res);
}

console.log(res);

