/**
 * 方案二
 * 原理是一样的, 唯一一个不同点是提前布满了 a
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    // k - n 每一位都是a的时候还差多少;i是下一个要进行填充的位
    let res = Array(n).fill('a'), remain = k - n, i = n - 1;
    while (remain) {
        if (remain > 25) { // 当前位无法填充完
            remain -= 25;
            res[i] = 'z';
            i--;
        } else { // 当前位可以填充完剩余的值
            res[i] = String.fromCharCode(97 + remain);
            remain = 0;
        }
    }
    return res.join('');
};

// 这一次的优化 效率较近增加了一倍:
// 执行用时：
// 156 ms
// , 在所有 JavaScript 提交中击败了
// 95.50%
// 的用户
// 内存消耗：
// 57.3 MB
// , 在所有 JavaScript 提交中击败了
// 23.00%
// 的用户
