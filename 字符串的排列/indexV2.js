/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    var len2 = s2.length
    var len1 = s1.length
    var arr1 = new Array(26).fill(0)

    var getP = (char) => char.charCodeAt() - 97

    for (var i = 0; i < len1; i++) {
        var key = getP(s1[i])
        arr1[key]++
    }

    var arr2 = new Array(26).fill(0)
    var left = right = 0


    var compare = function (a1, a2) {
        return a1.every((v, i) => {
            return v === a2[i]
        })
    }

    while (right < len2) {
        arr2[getP(s2[right])] += 1
        if (compare(arr1, arr2)) {
            return true
        }
        right++

        if (right - left + 1 > len1) {
            arr2[getP(s2[left])] -= 1
            left += 1
        }
    }

    return false
};


console.log(checkInclusion("ab","eidboaoo"))
console.log(checkInclusion("adc", "dcda")) // true
