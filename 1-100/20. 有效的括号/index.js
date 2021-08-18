/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var arr = []
    const len = s.length
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const leftMap = ['(', '[', '{']

    for (let i = 0; i < len; i++) {
        const cur = s[i]
        if (leftMap.includes(cur)) {
            arr.push(cur)
            continue
        }

        if (arr[arr.length - 1] !== map[cur]) {
            return false
        }
        arr.pop()

    }

    return !arr.length
};

/**
 * 思路:
 * 从左往右遍历, 如果是 左边的 则加入栈中,  如果右边的则匹配栈中最后一位, 匹配上则消除, 未匹配上则失败
 * 最后查看栈中剩余
 */
