/**
 * 循环了两遍  性能较差
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    var map = []
    var res = []
    var len = nums.length
    while (len--) {
        var cur = nums[len]
        map[cur - 1] = cur
    }
    for (var i = 0, len = nums.length; i < len; i++) {
        if (!map[i]) {
            res.push(i + 1)
        }
    }
    return res
};
