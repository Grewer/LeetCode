/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 思路: 通过 i/列 得到 列数  在通过 i%列 得到 对应所在点
 * 相比方案 1, 简单了很多
 */
var matrixReshape = function (nums, r, c) {
    var len = nums.length
    var row = nums[0].length
    if (len * row !== r * c) {
        return nums
    }
    var result = new Array(r).fill(0).map(v => [])
    for (var i = 0, tot = len * row; i < tot; i++) {
        result[Math.floor(i / c)][i % c] = nums[Math.floor(i / row)][i % row]
    }
    return result
};
