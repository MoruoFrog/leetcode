/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// iterate solution
var isLeaf = (node) => !(node.left || node.right)

var inorderTraversal = function(root) {
  const stack = []
  const result = []

  let current = root
  let isTrackBack = false

  while(current) {
    if (isLeaf(current)) {
      result.push(current.val)
      current = stack.pop()
      isTrackBack = true
      continue
    }

    if (isTrackBack) {
      result.push(current.val)

      if (current.right) {
        current = current.right
        isTrackBack = false
      } else {
        current = stack.pop()
        isTrackBack = true
      }
    }else {
      stack.push(current)
      if (current.left) {
        current = current.left
        isTrackBack = false
      } else {
        current = stack.pop()
        isTrackBack = true
      }
    }
  }

  return result
}

// recursion
var inorderTraversal = function(root) {
    if (!root) return []
    
    const leftInorder = inorderTraversal(root.left)
    const rightInorder = inorderTraversal(root.right)
    return [...leftInorder, root.val, ...rightInorder]
};