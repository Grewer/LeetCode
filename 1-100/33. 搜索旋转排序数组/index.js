/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid
        }
        // console.log(mid, l, r)
        if (nums[mid] < nums[r]) {
            // 中间的数小于最右边的数

            if (nums[mid] < target && target <= nums[r]) {
                // // 如果目标值在 右边的区间
                l = mid + 1
            } else {
                r = mid - 1
            }

        } else {
            // 中间的数大于右边的数

            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    return -1
};
