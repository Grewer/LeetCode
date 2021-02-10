/**
 * 方案三
 * 与方案二相同  但是过程上算是 优化了一下
 *
 * 思路:  https://leetcode-cn.com/problems/subarrays-with-k-different-integers/solution/k-ge-bu-tong-zheng-shu-de-zi-shu-zu-by-l-9ylo/
 *
 * @param A
 * @param K
 */

var subarraysWithKDistinct = function(A, K) {
    var len = A.length
    const num1 = new Array(len + 1).fill(0);
    const num2 = new Array(len + 1).fill(0);
    var tot1 = 0, tot2 = 0;
    var left1 = 0, left2 = 0, right = 0;
    var res = 0
    while (right<len){
        if (!num1[A[right]]) {
            tot1++;
        }
        num1[A[right]]++;
        if (num2[A[right]] === 0) {
            tot2++;
        }
        num2[A[right]]++;

        while (tot1 > K) {
            num1[A[left1]]--;
            if (num1[A[left1]] === 0) {
                tot1--;
            }
            left1++;
        }
        while (tot2 > K - 1) {
            num2[A[left2]]--;
            if (num2[A[left2]] === 0) {
                tot2--;
            }
            left2++;
        }
        res += left2 - left1;
        right++;

    }
    return res;
}


console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)) // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)) // 3
console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1)) // 8
