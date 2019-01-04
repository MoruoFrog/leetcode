/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归
var reverseList = function(head) {
    if (!head || !head.next) return head

    const next = head.next
    const reversed = reverseList(next)
    next.next = head
    head.next = null

    return reversed
};


// 取下头节点，插入到反转链表头部
var reverseList = function(head) {
    if (!head) return head

    let current = head
    let reversedHead = null
    let next = null

    while(current) {
      next = current.next
      current.next = reversedHead
      reversedHead = current
      current = next
    }

    return reversedHead
};
