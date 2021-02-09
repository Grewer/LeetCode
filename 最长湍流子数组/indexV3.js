// 再度优化

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
    if (arr.length < 2) {
        return 1
    }
    var total = 1
    var ins = 1
    var des = 1

    for (var i = 1, len = arr.length; i < len; i++) {
        cur = arr[i - 1]
        next = arr[i]
        if (cur < next) {
            ins = des + 1
            des = 1
            total = ins > total ? ins : total
        } else if (cur > next) {
            des = ins + 1
            ins = 1
            total = des > total ? des : total
        } else {
            ins = des = 1
        }
    }
    return total
};


console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0])) // 5
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])) // 5
console.log(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24])) // 8
console.log(maxTurbulenceSize([9, 9])) // 1
console.log(maxTurbulenceSize([37,199,60,296,257,248,115,31,273,176])) // 5
