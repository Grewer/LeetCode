/**
 * 不使用字符串的话, 思路就和第 7 题一样, 对整数进行反转
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }

    let rev = 0

    /**
     * 这里就是将 temp 倒转了
     */
    let temp = x
    while (temp !== 0) {
        const digit = temp % 10;
        temp = ~~(temp / 10);
        rev = rev * 10 + digit;
    }

    return rev === x
};
