/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 解题思路:https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/

// 0,0 0
// 0,1 1
// 0,2 2
// 1,0 7
// 1,1 8
// 1,2 4
// 2,0 6
// 2,1 5
// 2,2 4
var spiralOrder = function (matrix) {
        var m = matrix.length
        var n = matrix[0].length
        var total = m * n
        var arr = []
        var top = 0,
            left = 0,
            bottom = m - 1,
            right = n - 1
        while (total >= 1) {
            for (var i = left; i <= right && total >= 1; i++) {
                arr.push(matrix[top][i])
                total--
            }
            top++

            for (var i = top; i <= bottom && total >= 1; i++) {
                arr.push(matrix[i][right])
                total--
            }

            right--

            for (var i = right; i >= left && total >= 1; i--) {
                arr.push(matrix[bottom][i])
                total--
            }

            bottom--

            for (var i = bottom; i >= top && total >= 1; i--) {
                arr.push(matrix[i][left])
                total--
            }

            left++


        }
        return arr
    };
