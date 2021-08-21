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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    let result = new ListNode(0);
    let temp = result
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1
            temp = temp.next
            l1 = l1.next
            // console.log(temp, l1, result)
        } else {
            temp.next = l2
            temp = temp.next
            l2 = l2.next
        }

    }
    // console.log(temp)

    if (l1 === null) {
        temp.next = l2
    } else {
        temp.next = l1
    }

    // console.log(temp)

    return result.next
};

/**
 * 使用了循环处理
 * 关键点在于
 *  temp.next = l1
 *  temp = temp.next
 */
