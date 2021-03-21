/**
 * @param {string[]} tokens
 * @return {number}
 * 这是更具基础思路手写的一种解法  缺点是执行和效率较低
 */
var evalRPN = function (tokens) {
    var map = ['+', '-', '*', '/']
    var i = 0, len = tokens.length
    var stack = []
    for (; i < len; i++) {
        var cur = tokens[i]
        if (map.indexOf(cur) > -1) {
            var arr = stack.slice(-2)
            var val = parseInt(eval(`${arr[0]}
            ${cur}
            ${arr[1]}`))
            // console.log(val)
            stack.splice(stack.length - 2, 2, val)
            // console.log(stack)
        } else {
            stack.push(cur)
        }
    }

    return stack[0]
};
