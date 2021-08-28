/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i--
            len--
        }
    }
    return nums.length
};

/**
 * 勉强通过
 * 但是排名较低
 */
