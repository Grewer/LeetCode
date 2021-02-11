/**
 * 方案 1
 * 把字符串的比较转换成了对象
 *
 * 这种方案性能比较差
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var len2 = s2.length
    var len1 = s1.length
    var arr1 = {}
    for(var i = 0;i<len1;i++){
        if(arr1[s1[i]] === undefined){
            arr1[s1[i]] = 0
        }
        arr1[s1[i]] += 1
    }
    var arr2 = {}
    var left = right = 0


    var compare = function(o1,o2){
        var o1keys = Object.keys(o1)
        var o2keys = Object.keys(o2)
        if(o1keys.length === o2keys.length){
            return o1keys.every(v=>{
                return o1[v] === o2[v]
            })
        }
        return false
    }

    while(right < len2){
        if(arr2[s2[right]] === undefined){
            arr2[s2[right]] = 0
        }
        arr2[s2[right]] += 1
        console.log('比较',arr1,arr2)
        if(compare(arr1, arr2)){
            return true
        }
        right++

        if(right - left + 1 > len1){
            arr2[s2[left]] -= 1
            if(arr2[s2[left]] === 0){
                delete arr2[s2[left]]
            }
            left += 1
        }

    }

    return false
};

console.log(checkInclusion("adc","dcda")) // true
