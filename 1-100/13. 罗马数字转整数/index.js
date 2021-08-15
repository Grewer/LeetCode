/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    const len = s.length
    let result = 0
    let prev = 0
    for (let i = 0; i < len; i++) {
        const cur = map[s[i]]
        // console.log(cur)
        if (prev < cur && prev) {
            result = result - prev + cur - prev
        } else {
            result += cur
        }
        prev = cur
    }
    return result
};

// 通过比较前一位和后一位来获取 类似于 `IX` 这种情况
