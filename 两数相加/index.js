/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var i = 0;
    var total = []
    var _l1 = l1, _l2 = l2
    var over = 0
    while (i <= 100) {
        if (!_l1 && !_l2) {
            break
        }
        _l1 = _l1 || new ListNode()
        _l2 = _l2 || new ListNode()
        var res = _l1.val + _l2.val
        total.push((res + over) % 10)
        over = Math.floor((res + over) / 10)
        _l1 = _l1.next
        _l2 = _l2.next
    }
    if (over) {
        total.push(over)
    }
    var len = total.length
    var result
    while (len--) {
        result = new ListNode(total[len], result)
    }
    return result
};
