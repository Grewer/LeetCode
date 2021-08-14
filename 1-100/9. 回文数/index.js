/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    const str = x.toString()
    let l = 0, r = str.length - 1

    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++
        r--
    }

    return true

};

// 同样是转换成字符串 获取位数进行对比,  此方案没有到达进阶的水平
