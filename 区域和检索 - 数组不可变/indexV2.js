/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    if (!nums.length) {
        this.map = nums
        return
    }
    this.map = [nums[0]]
    for (var n = 1; n < nums.length; n++) {
        this.map[n] = this.map[n - 1] + nums[n]
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    if (i === 0) {
        return this.map[j]
    } else {
        return this.map[j] - this.map[i - 1]
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
