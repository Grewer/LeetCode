// 最简单也是最容易理解的

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {

    var arr = this.nums
    var sum = 0
    for (var n = 0; n < arr.length; n++) {
        if (n > j) {
            break
        }
        if (n >= i && n <= j) {
            sum += arr[n]
        }
    }

    return sum

};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
