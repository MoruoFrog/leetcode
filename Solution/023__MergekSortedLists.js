/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 类似于选择排序
var mergeKLists = function(lists) {
    const result = new ListNode(0)

    let pointer = result
    let min
    let minIndex

    lists = lists.filter(Boolean)

    while (lists.length > 0) {
        min = lists[0]
        minIndex = 0

        for (let i = 1; i < lists.length; i++) {
            let node = lists[i]
            if (!node) continue

            if (node.val <= min.val) {
                min = node
                minIndex = i
            }
        }

        pointer.next = min
        pointer = min
        lists[minIndex] = min.next
        if (!min.next) lists.splice(minIndex, 1)
    }
    return result.next
};
