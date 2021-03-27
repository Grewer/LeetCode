/**
 * 我们可以对方法二进一步优化，只使用一个标记变量记录第一列是否原本存在
 * 这样，第一列的第一个元素即可以标记第一行是否出现
 * 但为了防止每一列的第一个元素被提前更新，我们需要从最后一行开始，倒序地处理矩阵元素。
 * @param matrix
 */

var setZeroes = function (matrix) {
    const m = matrix.length, n = matrix[0].length;
    let flagCol0 = false;
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            flagCol0 = true;
        }
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    // 先循环  判断第一列
    // 如果有 0 则标记 flag
    // 循环剩下的
    // 如果有 0 则将 最左列和最上行的那 2 个位置的数字 置为 0

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (flagCol0) {
            matrix[i][0] = 0;
        }
    }

    // 从最后一行循环
    // 如果 当前行首位或者 当前列首位为 0  则当前值置为 0
};
