/**
 * @param {string} s
 * @return {boolean}
 */
// 大概思路
// 设两个栈，一个存左括号，一个存星号，遇右括号，先匹配左括号组，再匹配星号组，都没有返回false
// 匹配完剩余星号和左括号匹配，注意左括号要在星号左侧，左括号不能有剩余

var checkValidString = function (s) {
        let l = []
        let x = []
        for (let i = 0, len = s.length; i < len; i++) {
            const cur = s[i]
            if (cur === '(') {
                l.push(i)
            } else if (cur === '*') {
                x.push(i)
            } else {
                if (!l.length && !x.length) {
                    return false
                }
                if (l.length === 0) {
                    x.pop()
                } else {
                    l.pop()
                }
            }
        }
        // console.log(l, x)
        while (l.length && x.length) {
            if (l[l.length - 1] > x[x.length - 1]) return false
            l.pop()
            x.pop()
        }
        // console.log(l)
        return !l.length
    };
