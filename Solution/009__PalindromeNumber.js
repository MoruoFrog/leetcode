/**
 * @param {number} x
 * @return {boolean}
 */

/**
 * 进制转换
 * use a array
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let divisor = x
    let remainder = 0
    let a = []
    while(divisor >= 10) {
        remainder = divisor % 10
        a.push(remainder)
        divisor = Math.floor(divisor / 10)
    }
    a.push(divisor)

    const l = a.length
    return a.reduce((result, v, i) => {
        result += v * Math.pow(10, l - i - 1)
        return result
    }, 0) === x
};

// calculate directly
var isPalindrome = function(x) {
    if (x < 0) return false
    let divisor = x
    let remainder = 0
    let r = 0
    while(divisor > 0) {
        remainder = divisor % 10
        r = r * 10 + remainder
        divisor = Math.floor(divisor / 10)
    }
    return r === x
};
