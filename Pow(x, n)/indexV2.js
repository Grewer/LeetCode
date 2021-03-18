/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1
    }
    if (n > 0) {
        if (n & 1) {
            return myPow(x, n - 1) * x

        }
        return myPow(x * x, n / 2)
    }
    return 1 / myPow(x, -n)
};

// 借用了公式
// n 的 m 次方 等于   (n 的 m/2 次方) 乘以 ( n 的 m/2 次方)
// 相比较方法一  一次就减少了一半的遍历和乘法
// Math.pow(10,20) === Math.pow(10,10) * Math.pow(10,10) // true
