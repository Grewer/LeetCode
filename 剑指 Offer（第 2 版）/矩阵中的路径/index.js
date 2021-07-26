// 使用的是回溯算法:

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board == null || board.length == 0 || board[0].length == 0) {
        return false;
    }
    let visited = new Array(board.length).fill(0).map(v => [])


    for (let i = 0, len = board.length; i < len; i++) {
        for (let j = 0, len2 = board[0].length; j < len2; j++) {
            // console.log(board[i][j], word[0])
            if (board[i][j] === word[0]) {
                const res = dfs(board, word, visited, i, j, 0)
                if (res) {
                    return true
                }
            }
        }
    }
    return false
};

const dfs = function (board, word, visited, i, j, path) {
    if (i < 0 || j < 0) return false

    if (i === board.length || j === board[0].length) {
        return false
    }

    if (visited[i][j]) {
        return false
    }

    if (board[i][j] !== word[path]) {
        return false
    }

    // 表示找到了
    if (path === word.length - 1) {
        return true
    }

    visited[i][j] = true;

    // console.log(i,j)

    const res = dfs(board, word, visited, i + 1, j, path + 1)
        || dfs(board, word, visited, i - 1, j, path + 1)
        || dfs(board, word, visited, i, j + 1, path + 1)
        || dfs(board, word, visited, i, j - 1, path + 1);

    visited[i][j] = false

    return res
}
