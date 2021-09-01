// 我们使用队列模拟滑动窗口，该滑动窗口的含义是前面 K - 1K−1 个元素中，以哪些位置起始的 子区间 进行了翻转。
// 该滑动窗口从左向右滑动，如果当前位置 ii 需要翻转，则把该位置存储到队列中。
// 遍历到新位置 j (j < i + K)j(j<i+K) 时，队列中元素的个数代表了 ii 被前面 K - 1K−1 个元素翻转的次数。
//
// 当 A[i]A[i] 为 0，如果 ii 位置被翻转了偶数次，那么翻转后仍是 0，当前元素需要翻转；
// 当 A[i]A[i] 为 1，如果 ii 位置被翻转了奇数次，那么翻转后变成 0，当前元素需要翻转。
// 综合上面两点，我们得到一个结论，如果 len(que) % 2 == A[i] 时，当前元素需要翻转。
//
// 当 i + K > Ni+K>N 时，说明需要翻转大小为 K 的子区间，但是后面剩余的元素不到 K 个了，所以返回 -1。


// https://leetcode-cn.com/problems/minimum-number-of-k-consecutive-bit-flips/solution/hua-dong-chuang-kou-shi-ben-ti-zui-rong-z403l/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function (A, K) {
    var res = 0
    var que = []

    for (let i = 0, len = A.length; i < len; i++) {
        if (que.length > 0 && i > (que[0] + K - 1)) {
            que.shift()
        }


        // 需要翻转的元素
        //1.本来是1，翻转奇数次变为0，所以需要再次翻转，放入队列
        //2.本来是0，翻转偶数次还是0，所以需要再次翻转，放入队列
        if (que.length % 2 === A[i]) {
            if (i + K > A.length) return -1;
            que.push(i);
            res += 1;
        }
    }

    return res;
};
