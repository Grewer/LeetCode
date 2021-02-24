/**
 * 此方案可行, 但是最终还是超时  太过复杂
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    var l = 0
    var r = 0
    var len = nums.length
    var max = 0
    var tempMax = 0
    var tempMin = 0
    for (; l < len; l++) {
        tempMax = nums[l]
        tempMin = nums[l]
        for (r = l; r < len; r++) {
            tempMax = Math.max(nums[r], tempMax)
            tempMin = Math.min(nums[r], tempMin)
            // console.log({tempMax,tempMin})
            if (Math.abs(tempMax - tempMin) <= limit) {
                max = Math.max(max, r - l + 1)
            }
        }
    }
    // console.log(max)

    return max
};
