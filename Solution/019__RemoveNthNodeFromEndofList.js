/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// use cache
var removeNthFromEnd = function(head, n) {
    const cache = []
    const origin = head

    while(head.next !== null) {
        cache.push(head)
        head = head.next
    }

    cache.push(head)
    const l = cache.length

    if (l === n) {
        return origin.next
    }

    cache[l - n - 1].next = cache[l - n + 1]

    return origin
};