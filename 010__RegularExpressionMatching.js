/**
 * https://leetcode.com/problems/regular-expression-matching/description/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//recursion dp with cache
var isMatch = function(s, p) {
    const cache = new Array(s.length).fill(0).map(a => new Array(p.length).fill(0))
    const dp = (i, j) => {
        if (j < 0 && i >= 0) return false
        if (i < 0) {
            while(j >= 0) {
                if (p[j] !== '*') return false
                j -= 2
            }
            return true
        }
        if(cache[i][j] !== 0) return cache[i][j]

        if (p[j] === '.') {
            cache[i][j] = dp(i - 1, j - 1)
            return cache[i][j]
        }
        if(p[j] === '*') {
            if (p[j - 1] === '.' || p[j - 1] === s[i]) {
                cache[i][j] =  dp(i - 1, j - 2) || dp(i - 1, j) || dp(i, j - 2)
                return cache[i][j]
            }
            cache[i][j] = dp(i, j - 2)
            return cache[i][j]
        }
        if(p[j] === s[i]) {
            cache[i][j] = dp(i - 1, j - 1)
            return cache[i][j]
        }

        cache[i][j] = false
        return false
    }

    return dp(s.length - 1, p.length - 1)
};
