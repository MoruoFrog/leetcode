/**
 * @param {number[][]} grid
 * @return {number}
 */

// 递归 + hash O(m * n), S(m * n)
var minPathSum = function(grid) {

    const getMartix = (m ,n) => {
        return grid[m - 1][n - 1]
    }

    const m = grid.length
    const n = grid[0].length
    const cache = new Array(m + 1).fill(1).map(a => new Array(n + 1))

    const recur = (m, n) => {
        if (cache[m][n]) return cache[m][n]
        if (m === 0 || n === 0) return Number.POSITIVE_INFINITY

        if (m === 1 && n === 1) {
            cache[m][n] = getMartix(1, 1)
            return cache[m][n]
        }
        cache[m][n] = Math.min(recur(m - 1, n), recur(m, n - 1)) + getMartix(m, n)
        return cache[m][n]
    }

    return recur(m, n)
};
