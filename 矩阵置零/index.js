/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 *
 * 算是最基础的一个方案
 * 1. 先遍历把 0 全部取出
 * 2. 在遍历 set 把对应的行,列全部置为 0
 *
 * 额外空间 O(m+n)
 */
var setZeroes = function (matrix) {
    var m = matrix.length // 竖着
    var n = matrix[0].length // 横着
    var rowSet = new Set()
    var colSet = new Set()
    for (var i = 0; i < m; i++) { // i 横坐标
        for (var j = 0; j < n; j++) { // j 纵坐标
            if (matrix[i][j] === 0) {
                colSet.add(i)
                rowSet.add(j)
            }
        }
    }
    colSet.forEach((col) => {
        matrix[col] = new Array(n).fill(0)
    })
    rowSet.forEach(row => {
        for (var i = 0; i < m; i++) {
            matrix[i][row] = 0
        }
    })
    return matrix
};
