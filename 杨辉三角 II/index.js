/**
 * 暴力破解, 遍历出 1-K 行的所有
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var res = new Array(rowIndex + 1).fill(0)
    res[0] = 1
    for (var j = 1; j <= rowIndex; j++) {
        for (var i = j; i >= 0; i--) {
            console.log(i,j,res)
            res[i] = (i - 1 >= 0 ? res[i - 1] : 0) + res[i];
        }
    }
    return res
};


// 0 [1]
// 1 [1,1]
// 2 [1,2,1]
// 3 [1,3,3,1]
// 4 [1,4,6,4,1]
// 5 [1,5,10,10,5,1]

console.log(getRow(5))
