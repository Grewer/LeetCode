/**
 * 我的答案 ,但是错误
 *
 * 错误点在于:
 * 输入 [2,1,1,1,2] 1, 正确返回的是 8
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    var arrNum = 0;
    if(A.length < 2){
        return A.length
    }
    var len = A.length

    for(var i = 0;i<len;i++){
        var cur = A[i]
        var check = [cur]
        for(var j = i+1;j<len;j++){
            var select = A[j]
            if(check.indexOf(select)>-1){
                if(check.length === K){
                    console.log('check1',check)
                    arrNum++
                }
                continue;
            }
            check.push(select)
            if(check.length > K){
                break
            }else if(check.length === K){
                console.log('check2',check)
                arrNum++
            }
        }

    }
    return arrNum
};


console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)) // 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)) // 3
console.log(subarraysWithKDistinct([2, 1, 1, 1, 2], 1)) // 8
