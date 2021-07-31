// 思路:

/*
    k = 73, n = 5
    倒着添加字符，尾巴能添加z就添加z，k减去26
    如果不能添加z，并且剩余的字符大于k个，说明不能用全a表示，
    就添加一个目前能获得的最大字符，然后前面全是a。
    举个例子,k = 73,添加两个z，剩下21，剩余的字符数是3；
    结果就是对于a + a +(字符) = 21,解方程可知字符为s=19。
 */


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    const str = []
    while (n > 0) {
        // 比如 k = 27 n=3  1 >= 2 这种情况无法通过
        if (k - 26 >= n - 1) {
            n--
            str[n] = 'z'
            k -= 26
        } else if (k > n) {
            // 比如 k = 24 n=2  小于 26   k-n-1+97  97=a
            // a-z 中间的情况
            n--
            str[n] = String.fromCodePoint(k - n + 96)
            k = n - 1
        } else {
            n--
            str[n] = 'a'
            k--
        }
    }
    return str.join('')
};

// 这个算法的结果是正确的  但是效率偏慢:
// 执行用时：
// 356 ms
// , 在所有 JavaScript 提交中击败了
// 12.00%
// 的用户
// 内存消耗：
// 59.5 MB
// , 在所有 JavaScript 提交中击败了
// 6.00%
// 的用户


// 相同的算法 在 Java 中 可以击败 90%的用户
