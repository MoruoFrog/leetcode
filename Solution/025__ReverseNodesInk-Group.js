/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
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

var walk = function (head, k) {
    let count = 1
    let result = head
    while(result && count < k) {
        result = result.next
        count++
    }
    
    return result
}

// 递归
var reverseKGroup = function(head, k) {
    let groupHead = head
    let groupTail = walk(head, k)
    if (!groupTail) return groupHead
    
    const reverseHead = reverseKGroup(groupTail.next, k)
    groupTail.next = null
    reverseList(groupHead)
    groupHead.next = reverseHead
    return groupTail
}

// 非递归
var reverseKGroup = function(head, k) {
    let groupHead = head
    let groupTail = walk(head, k)
    let lastGroupHead = head
    let nextGroupHead = groupTail.next
    
    const result = groupTail

    while(groupTail) {
        nextGroupHead = groupTail.next
        groupTail.next = null
        reverseList(groupHead)
        groupHead.next = nextGroupHead
        lastGroupHead.next = groupTail
        
        lastGroupHead = groupHead
        groupHead = nextGroupHead
        groupTail = walk(groupHead, k)
    }
    
    return result
}