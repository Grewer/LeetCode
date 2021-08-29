/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++
        }
    }
    // console.log(nums, j)
    return j
};

/**
 * 与第 26 题的思路基本一致
 */
