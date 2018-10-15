/**
 * Example 2:
 * Input: 
 *  [
 *   [0,1,2,0],
 *   [3,4,5,2],
 *   [1,3,1,5]
 *  ]
 * Output: 
 *  [
 *   [0,0,0,0],
 *   [0,4,5,0],
 *   [0,3,1,0]
 *  ]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// S(1) O(m * n)
var setZeroes = function(matrix) {
    const m = matrix.length
    const n = matrix[0].length

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = 'T'
                let _i = 0,
                    _j = 0
                while (_i < m) {
                    if (matrix[_i][j] !== 0) matrix[_i][j] = _i < i ? 0 : 'T'
                    _i++
                }
                while (_j < n) {
                    if (matrix[i][_j] !== 0) matrix[i][_j] = _j < j ? 0 : 'T'
                    _j++
                }
            }

            if (matrix[i][j] === 'T') matrix[i][j] = 0
        }
    }

};