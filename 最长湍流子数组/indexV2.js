// 原方案的代码优化

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    if (arr.length === 1) {
        return 1
    }
    var max1 = 1
    var max2 = 1
    var total = 1
    var cur = 0
    var next = 0
    var isOdd = num => num % 2 === 1

    for (var i = 0, len = arr.length; i < len; i++) {
        cur = arr[i]
        if (i + 1 >= len) {
            break
        }
        next = arr[i + 1]

        if (isOdd(i)) {
            if (cur > next) {
                max1++
            } else {
                total = Math.max(max1, total)
                max1 = 1
            }

            if (cur < next) {
                max2++
            } else {
                total = Math.max(total, max2)
                max2 = 1
            }
        } else {
            if (cur < next) {
                max1++
            } else {
                total = Math.max(max1, total)
                max1 = 1
            }

            if (cur > next) {
                max2++
            } else {
                total = Math.max(total, max2)
                max2 = 1
            }
        }
    }
    return Math.max(total, max1, max2)
};

console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0])) // 5
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])) // 5
console.log(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24])) // 8
console.log(maxTurbulenceSize([9, 9])) // 1
