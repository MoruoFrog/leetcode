/**
 * Example
 * Input: s = "PAYPALISHIRING", numRows = 3
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * Output: "PAHNAPLSIIGYIR"
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// use a martix
var convert = function(s, numRows) {
    if(numRows === 1) return s

    const m = numRows
    const len = s.length
    const martix = new Array(m).fill(0).map(v => [])

    let direction = 'down'
    let _m = 0,
        _n = 0,
        i = 0
    while(i < len) {
        martix[_m][_n] = s[i]
        if (direction === 'down') {
            _m++
            if (_m === m - 1) {
                direction = 'top'
            }
        } else {
            _m--
            _n++
            if (_m === 0) {
                direction = 'down'
            }
        }
        i++
    }

    return martix.map(arr => arr.join('')).join('')
};

// solution 2, 从左往右都是一个个重复的部分，对于每一个n，都可以算出每一个部分有多少个元素（等差数列），每一列的下一个位置，但是我并不想算了