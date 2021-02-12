// 公式 第n行的第1个数为1，第二个数为1×(n-1)，第三个数为1×(n-1)×（n-2）/2，第四个数为1×(n-1)×（n-2）/2×（n-3）/3…

//  * 直接使用组合公式C(n,i) = n!/(i!*(n-i)!)
//  * 则第(i+1)项是第i项的倍数=(n-i)/(i+1);
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var _row = rowIndex+1
    var arr = new Array(_row)
    arr[0] = 1

    var len = arr.length
    for (var i = 1; i < len; i++) {
        arr[i] = arr[i - 1] * ((_row - i) / (i))
    }

    return arr
};
