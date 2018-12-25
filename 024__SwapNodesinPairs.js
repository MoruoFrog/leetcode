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
var swapPairs = function(head) {
    let current = head
    let last
    let result = head
        ? head.next || head
        : head

    while(current && current.next) {
        const next = current.next
        
        if (next) current.next = next.next
        next.next = current
        
        if (last) last.next = next
        
        last = current
        current = current.next
    }
    
    return result
}