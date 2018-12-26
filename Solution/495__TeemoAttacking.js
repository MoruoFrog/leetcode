/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * https://leetcode.com/problems/teemo-attacking/
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let result = 0
    let currentEndPoisonTime = 0
    
    timeSeries.forEach(time => {
        result += duration
        if (time < currentEndPoisonTime) {
            result -= currentEndPoisonTime - time
        }
        currentEndPoisonTime = time + duration
    })
    
    return result
};