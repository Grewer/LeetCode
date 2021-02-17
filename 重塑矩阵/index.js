/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * 思路: 将数组压成一维  然后再根据 r,c 两个数字来截取
 */
var matrixReshape = function (nums, r, c) {
    var len = nums.length
    var row = nums[0].length
    if (len * row < r * c) {
        return nums
    }
    var _nums = nums.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
            prev = prev.concat(cur)
        } else {
            prev.push(cur)
        }
        return prev
    }, [])
    var result = []
    for (var i = 0; i < r; i++) {
        result.push(_nums.slice(i * c, (i + 1) * c))
    }
    return result
};
