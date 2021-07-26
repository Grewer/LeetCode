/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) {
        return 1
    }
    if (n <= 2) {
        return n
    }
    let cache = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        cache[i] = (cache[i - 1] + cache[i - 2]) % 1000000007
    }

    return cache[cache.length - 1]
};


// f n = f n-1 + f n-2

// 0  1
// 1  1
// 2  2
// 3  3
// 4  5    1111  211 112 121 22
// 5  8


// 方案参考: https://www.zhihu.com/question/291280715/answer/1570410869
