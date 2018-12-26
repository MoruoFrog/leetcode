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

// dp with cache
var longestValidParentheses = function(s) {
    const cache = new Array(s.length).fill(-1)

    // result end with i
    const dp = i => {
        if (i < 1) return 0
        if (s[i] === '(') return 0
        if(i === 1 && s[0] === '(') return 2
        if (cache[i] !== -1) return cache[i]

        if (s[i] === '(') {
            cache[i] = 0
            return cache[i]
        }

        if(s[i - 1] === '(') {
            cache[i] = dp(i - 2) + 2
            return cache[i]
        }

        // s[i - 1] === ')'
        let l = dp(i - 1)
        if (l === 0) {
            cache[i] = 0
            return 0
        }

        // dp(i - 1) > 0
        cache[i] = s[i - l - 1] === '('
            ? l + 2 + dp(i - l - 2)
            : 0

        return cache[i]
        
    }

    let result = 0
    for(let i = 1; i < s.length; i++) {
        result = Math.max(dp(i), result)
    }
    return result
}