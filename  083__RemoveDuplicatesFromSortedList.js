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
var deleteDuplicates = function(head) {
    if (!head) return head
    let next = head.next
    let current = head
    while(next) {
        if (next.val === current.val) {
            current.next = next.next
        } else {
            current = next   
        }
        
        next = current.next
    }
    return head
};