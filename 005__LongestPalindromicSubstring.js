/**
 * @param {string} s
 * @return {string}
 */

/**
 * 反转之后求最长公共子串，暴力解，需要注意并不是所有的公共子串都是回文字符串
 * leetcode 718. Maximum Length of Repeated Subarray
 * very naive
 */
var longestPalindrome = function(s) {
    const len = s.length
    const reverse = (() => {
        let i = len - 1
        let r = ''
        while(i >=0) {
            r += s.charAt(i--)
        }
        return r
    })()

    if (reverse === s) return s

    let i = 0
    let result = [0, 0]
    let start = 0
    let maxLength = 1

    const checkPalindrome = (ori, rev) => {
        return (ori[0] + rev[1] === len - 1 && ori[1] + rev[0] === len - 1)
    }

    while(i < len && len - i - 1 >= maxLength) {
        let v = s.charAt(i)

        let j = reverse.indexOf(v)
        if (j > len - i - maxLength) {
            i++
            continue
        }

        start = i
        let tempj = j
        let resultThisLoop
        while(j < len) {
            if (s.charAt(i) === reverse.charAt(j)) {
                if (i - start + 1 > maxLength) {
                    resultThisLoop = [[start, i], [tempj, j]]
                    if (checkPalindrome(...resultThisLoop)) {
                        result = resultThisLoop[0]
                        maxLength = result[1] - result[0] + 1
                    }
                }
                i++
                j++
            } else {
                i = start
                j = tempj + 1
                tempj++
            }

        }

        i = start + 1
    }

    return s.slice(result[0], result[1] + 1)
};