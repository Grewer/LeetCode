/**
 * 逻辑上没什么问题, 但是超时了
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    var res = 1
    for (var i = 0, len = Math.abs(n); i < len; i++) {
        res *= x
    }
    if (n < 0) {
        res = 1 / res
    }
    return res
};
