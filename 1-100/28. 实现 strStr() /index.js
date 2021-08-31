/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === haystack || needle === '') {
        return 0
    }
    let len2 = needle.length
    for (let i = 0, len = haystack.length; i < len; i++) {
        for (let j = 0; j < len2; j++) {
            if (haystack[i + j] === needle[j]) {
                if (j === len2 - 1) {
                    return i
                }
            } else {
                break;
            }
        }
    }
    return -1
};

/**
 * 双重循环的方案, 较为暴力
 * 用时只能打败 5%
 */
