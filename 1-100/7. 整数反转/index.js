/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const flag = x < 0

    const str = Math.abs(x).toString().split('').reverse().join('')

    const num = str >= (Math.pow(2, 31) - 1) ? 0 : Number(str)

    return flag ? -num : num

};

// 算是一种取巧的办法, 通过转成字符串数组来 调用 api 转换
