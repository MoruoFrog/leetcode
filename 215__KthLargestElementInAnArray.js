/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 1 ≤ k ≤ array's length
 */

// O(n * k), S(k)
var findKthLargest = function(nums, k) {
    const result = nums.slice(0, k)
    result.sort((a, b) => a - b)

    for(let i = k; i < nums.length; i++) {
        let num = nums[i]
        if (num <= result[0]) continue
        
        for(let j = k - 1; j >= 0; j--) {
            if (num > result[j]) {
                result.splice(j + 1, 0, num)
                result.shift()
                break
            }
        }
    }
    return result[0]
};