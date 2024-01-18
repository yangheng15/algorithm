function maxArea(height: number[]): number {
    let i = 0,
        j = height.length - 1;
    let s = (j - i) * min(height[j], height[i]);
    while (i < j) {
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
        const newS = (j - i) * min(height[j], height[i]);
        s = newS > s ? newS : s;
    }
    return s;
}

function min(num1: number, num2: number) {
    return num1 > num2 ? num2 : num1;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
