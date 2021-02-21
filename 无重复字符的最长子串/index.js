/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var len = s.length
    if (len < 2) {
        return len
    }
    var max = 0
    var l = r = 0
    var map = new Map()

    for (; r < len; r++) {
        var cur = s.charAt(r)

        if (map.has(cur)) {
            l = Math.max(l, map.get(cur) + 1);
        }

        map.set(cur, r)

        max = Math.max(max, r - l + 1);
    }

    return max

};
