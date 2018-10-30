/**
 * Unique Path II (https://leetcode.com/problems/unique-paths-ii/description/)
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// dp with cache, almost the same as 062 Unique Path
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const cache = new Array(m).fill(0).map(a => new Array(n))

    const dp = (m, n) => {
        if(m < 0 || n < 0) return 0
        if (obstacleGrid[m][n] === 1) return 0
        if (m === 0 && n === 0) return 1
        if(cache[m][n]) return cache[m][n]
        cache[m][n] = dp(m - 1, n) + dp(m, n - 1)
        return cache[m][n]
    }

    return dp(m - 1, n - 1)
};

// iterate dp, S(n), O(m * n), matain top and left, almost the same as 062 Unique Path
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const cache = new Array(n).fill(0) // only store top

    cache[0] = 1 // first step
    let left = 0
    let i, j
    for(i = 0; i < m; i++) {
        for(j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                left = 0
                cache[j] = 0
                continue
            }

            // left + top, cache[j] stored top
            if (j > 0) {
                cache[j] += left
            }
            left = cache[j]
        }
    }

    return left
}