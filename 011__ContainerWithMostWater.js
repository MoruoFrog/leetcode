/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const len = height.length
    let i = 0,
        j = len - 1,
        result = 0
    
    while(i !== j) {
        const top = height[i]
        const tail = height[j]
        result = Math.max(result, Math.min(top, tail) * (j - i))

        // if move the taller side, the result must decrease，so no need to do that
        if(tail >= top) {
            i++
        }else {
            j--
        }
    }
	return result
};