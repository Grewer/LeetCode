/**
 * 如果想要更快的速度, 可以从排序入手
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var _arr = nums.sort((a, b) => a - b)
    return _arr.reduce((prev, cur, index) => {
        if (index % 2 === 0) {
            prev += cur
        }
        return prev
    }, 0)
};
