/**
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * @param {string} s
 * @return {number}
 */

// use a stack
var longestValidParentheses = function(s) {
    const stack = []
    const l = s.length

    let result = 0
    let start = 0
    let breakTag = false
    for(let i = 0; i < l; i++) {
        if (s[i] === '(') {
            if (breakTag) {
                start = i
                breakTag = false
            }
            stack.push(i)
        } else {
            if (stack.length === 0) {
                breakTag = true
                continue
            }

            stack.pop()
            let l = stack.length
            let begin = l === 0 ? start : stack[l - 1] + 1

            result = Math.max(i - begin + 1, result)
        }
    }

    return result
};