/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var left = 0,
        top = 0,
        right = n - 1,
        bottom = n - 1;
    var arr = new Array(n).fill(0).map(v => [])
    var max = n ** 2
    var num = 1
    while (num <= max) {
        for (var i = left; i <= right; i++) {
            arr[top][i] = num
            num++
        }
        for (var i = top + 1; i <= bottom; i++) {
            arr[i][right] = num
            num++
        }
        for (var i = right - 1; i >= left + 1; i--) {
            arr[bottom][i] = num
            num++
        }
        for (var i = bottom; i >= top + 1; i--) {
            arr[i][left] = num
            num++
        }

        top++
        left++
        right--
        bottom--
    }

    return arr
};
