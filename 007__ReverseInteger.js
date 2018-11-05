/**
 * @param {number} x
 * @return {number}
 */

// use string
var reverse = function(x) {
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
        return 0
    }
    const isNegative = x < 0
    const _x = Math.abs(x)
    const reversed = Array.from(_x.toString()).reverse().join('').replace(/^0*/, '')
    const result = Number(isNegative ? '-' + reversed : reversed)
    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return result
    }
};

// 进制转换，辗转相除
var reverse = function(x) {
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
        return 0
    }

    const isNegative = x < 0
    if (isNegative) x = x * -1

    let result = 0
    let divisor = x
    while(divisor > 0) {
        let remainder = divisor % 10
        result = result * 10 + remainder
        divisor = Math.floor(divisor / 10)
    }

    if (isNegative) result = result * -1

    return result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1
        ? 0
        : result
};