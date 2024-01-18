/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;
    console.log(mid);
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            // 小于
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 13));
/**
 * left: 0 right: 6 mid = 3-5
 * left:4 right:6 mid = 5-12
 * left: 6 right: 6 mid=6-undefiend
 * left: 6 right:5
 */