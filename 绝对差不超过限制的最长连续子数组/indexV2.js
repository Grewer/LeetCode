/**
 * 同样是超出时间限制
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    var l = 0
    var r = 0
    var len = nums.length
    var max = 0
    var minQue = new Que()
    var maxQue = new Que('revere')

    while (r < len && l < len) {
        minQue.insert(nums[r])
        maxQue.insert(nums[r])

        if (maxQue.peek() - minQue.peek() <= limit) {
            max = Math.max(max, r - l + 1)
            r++;
            continue
        }

        minQue.delete(nums[l])
        maxQue.delete(nums[l])

        l++
        r++
    }

    return max
};

class Que {
    constructor(order) {
        // 顺序
        //
        this.order = order === 'revere' ? 2 : 1
        this.que = []
    }

    peek = () => {
        return this.que[0]
    }

    insert = (num) => {
        if (!this.que.length) {
            this.que.push(num)
            return
        }
        for (var i = 0, len = this.que.length; i < len; i++) {
            var cur = this.que[i]
            if (this.order === 1) {
                // 递增 1,2,3,4
                if (num < cur) {
                    this.que.splice(i, 0, num)
                    break
                }
                if (i === len - 1) {
                    this.que.push(num)
                }
            } else {
                // 递减  5,4,3,2
                if (num > cur) {
                    this.que.splice(i, 0, num)
                    break
                }

                if (i === len - 1) {
                    this.que.push(num)
                }
            }

        }
    }

    delete = (num) => {
        var index = this.que.indexOf(num)

        index > -1 && this.que.splice(index, 1)
    }
}
