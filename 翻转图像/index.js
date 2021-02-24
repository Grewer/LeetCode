/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    var len = A.length
    var row = 0
    var res = []
    for (var i = 0; i < len; i++) {
        var temp = []
        var arr = A[i]
        row = arr.length
        while (row--) {
            temp.push(arr[row] ^ 1)
            // temp.push(1-arr[row]) //同样成立
        }
        res.push(temp)
    }
    return res
};
