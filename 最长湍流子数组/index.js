// 最朴实无华的解法
// 优化空间 max

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
    var cur = 0
    var total1 = 1
    var total2 = 1
    var isOdd = num => num % 2 === 1

    for (var i = 0, len = arr.length; i < len; i++) {
        cur = arr[i]
        if (i + 1 >= len) {
            break
        }
        if (isOdd(i)) {
            console.log('奇数', cur, '>', arr[i + 1])
            if (cur > arr[i + 1]) {
                max1++
            } else {
                console.log('max1', max1)
                if (total1 < max1) {
                    total1 = max1
                }
                max1 = 1
            }
        } else {
            console.log('偶数', cur, '<', arr[i + 1])
            if (cur < arr[i + 1]) {
                max1++
            } else {
                console.log('max2', max1)
                if (total1 < max1) {
                    total1 = max1
                }
                max1 = 1
            }
        }
        if (!isOdd(i)) {
            console.log('偶数2', cur, '>', arr[i + 1])
            if (cur > arr[i + 1]) {
                max2++
            } else {
                console.log('max2', max2)
                if (total2 < max2) {
                    total2 = max2
                }
                max2 = 1
            }
        } else {
            console.log('奇数 2', cur, '<', arr[i + 1])
            if (cur < arr[i + 1]) {
                max2++
            } else {
                console.log('max2', max2)
                if (total2 < max2) {
                    total2 = max2
                }
                max2 = 1
            }
        }
    }
    if (total1 < max1) {
        total1 = max1
    }
    if (total2 < max2) {
        total2 = max2
    }
    return total1 < total2 ? total2 : total1
};

console.log(maxTurbulenceSize([0, 1, 1, 0, 1, 0, 1, 1, 0, 0])) // 5
console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])) // 5
console.log(maxTurbulenceSize([0,8,45,88,48,68,28,55,17,24])) // 8
