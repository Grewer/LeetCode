/**
 * 答案 1
 * 执行时间较长,花费较大
 * 解题详情: https://leetcode-cn.com/problems/subarrays-with-k-different-integers/solution/cong-zui-jian-dan-de-wen-ti-yi-bu-bu-tuo-7f4v/
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {

    var solution = function (A, K) {
        var len = A.length
        var left = right = 0;
        var counter = {}
        var res = 0
        var distinct = 0

        while (right < len) {
            var rightNum = A[right]
            if (counter[rightNum] === undefined) {
                counter[rightNum] = 0
            }
            if (counter[rightNum] === 0) {
                distinct += 1
            }
            counter[rightNum] += 1
            while (distinct > K) {
                var leftNum = A[left]
                if (counter[leftNum] === undefined) {
                    counter[leftNum] = 0
                } else {
                    counter[leftNum] -= 1
                }
                if (counter[leftNum] === 0) {
                    distinct -= 1
                }
                left += 1
            }
            res += right - left + 1
            right += 1
        }

        return res
    }

    return solution(A, K) - solution(A, K - 1)

};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)) // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)) // 3
console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1)) // 8
