/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// recursion dp with cache, S(m*n)
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) return 0
    const cache = new Array(m).fill(0).map(a => new Array(n))

    const dp = (m, n) => {
        if(m === 0 || n === 0) return 1
        if(cache[m][n]) return cache[m][n]
        cache[m][n] = dp(m - 1, n) + dp(m, n - 1)
        return cache[m][n]
    }

    return dp(m - 1, n - 1)
};

// iterate, S(n), O(m * n), matain top and left
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) return 0
    if(m === 1 || n === 1) return 1

    const cache = new Array(n).fill(1) // only store top

    let left = 1
    let i = 1
    let j = 1
    for(; i < m; i++) {
        left = 1
        for(j = 1; j < n; j++) {
            left = left + cache[j] // left + top
            cache[j] = left
        }
    }

    return left
}

// 排列组合
var uniquePaths = function(m, n) {
    // 组合公式
    const C = (m, n) => {
        let result = 1
        for(let i = m; i > m - n; i--) {
            result *= i
        }
        for(let j = 1; j <= n; j++) {
            result /= j
        }
        return result
    }

    // 一共m + n - 2步，往下m - 1步，往右n - 1步
    return C(m + n - 2, n - 1)
}