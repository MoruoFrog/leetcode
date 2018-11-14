/**
 * 20 Valid Parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const l = s.length
    if (l % 2 !== 0) return false

    const stack = new Array()

    const isLeft = s => s === '(' || s === '{' || s === '['

    const isMatch = (a, b) => {
      return (a === '(' && b === ')') || 
             (a === '[' && b === ']') || 
             (a === '{' && b === '}')
    }

    for(let i = 0; i < l; i++) {
      if (isLeft(s[i])) {
        stack.push(s[i])
        continue
      }

      if (isMatch(stack.pop(), s[i])) continue

      return false
    }

    return stack.length === 0
};