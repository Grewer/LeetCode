/**
 * @param {string[]} tokens
 * @return {number}
 * 不使用 eval
 * 超越 99%
 */
var evalRPN = function (tokens) {
    var map = {
        '+': (a, b) => parseInt(a) + parseInt(b),
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    var i = 0, len = tokens.length
    var stack = []
    for (; i < len; i++) {
        var cur = tokens[i]
        var fn = map[cur]
        if (fn) {
            var arr = stack.slice(-2)
            var val = parseInt(fn(arr[0], arr[1]))
            // console.log(val)
            stack.splice(stack.length - 2, 2, val)
            // console.log(stack)
        } else {
            stack.push(cur)
        }
    }

    return stack[0]
};
