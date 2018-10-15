/**
 * Example
 * Input: [1,2,3]
 * Output: [1,2,4]
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length
    let i = len - 1

    while(i >= 0) {
        const digit = digits[i]
        if (digit < 9) {
            digits[i]++
            break 
        }
        digits[i] = 0
        if (i === 0) digits.unshift(1)
        i--

    }
    return digits
    
};

/**
 * 如果使用array计算成number，再 + 1的思路，当数字超过Number.MAX_SAFE_INTEGER 时会由于精度问题失效
 */