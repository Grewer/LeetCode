/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        const middle = Math.floor((l + r) / 2)
        const val = nums[middle]
        // console.log({l,r,middle,val})
        if (val < target) {
            l = middle + 1
        } else if (val > target) {
            r = middle - 1
        } else {
            return middle
        }
    }
    return r + 1
};
/**
 * 最经典的二分法查找
 * 需要注意的点  middle 需要+1 和 -1 很容易遗漏, 遗漏就容易报错
 */
