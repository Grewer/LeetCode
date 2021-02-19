/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
    var l = 0
    var cur
    var que = 0
    for (var i = 0, len = A.length; i < len; i++) {
        cur = A[i]

        if (cur === 0) {
            que++
        }

        if (que > K) {
            if (!A[l]) {
                que--
            }
            l++
        }
    }

    return i - l
};
