/**
 * 由于创建了一个新的数组 效率不是很高
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    var row = matrix.length
    var col = matrix[0].length

    var res = new Array(col).fill(0).map(v => [])

    for (var i = 0; i < row; i++) {
        var rowArr = matrix[i]
        for (var j = 0; j < col; j++) {
            if (i !== j) {
                // console.log(j,i,res[j])
                res[j][i] = rowArr[j]
            } else {
                res[i][j] = rowArr[j]
            }
        }
    }

    return res
};
