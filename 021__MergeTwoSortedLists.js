/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// return new listNode
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    
    const result = new ListNode()
    let current = result
    
    while(l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            current = l1
            l1 = l1.next
            continue
        }
        
        current.next = l2
        current = l2
        l2 = l2.next
    }
    
    current.next = l1 || l2
    return result.next
};
