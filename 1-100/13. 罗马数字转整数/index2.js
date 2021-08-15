/**
 * 针对方案一的优化
 */


var romanToInt = function (s) {
    const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    const len = s.length
    let result = 0
    for (let i = 0; i < len; i++) {
        if (i - 1 >= 0 && map[s[i - 1]] < map[s[i]]) {
            result = result + map[s[i]] - map[s[i - 1]] * 2
        } else {
            result += map[s[i]]
        }
    }
    return result
};


/**
 * 相对来说此方法, 用时和空间占用都是最好的
 */
