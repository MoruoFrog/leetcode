/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * example
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 * @param {number[]} nums
 * @return {boolean}
 */

// 思路1: 能否跳过0，O(n)
var canJump = function(nums) {
    if (nums.length === 1) return true

    const len = nums.length
    let i = 0
    while (i < len - 1) { // if i === len - 1 ,means reach the last
        const jumpLength = nums[i]

        const maxJump = i + jumpLength
        if (maxJump >= len - 1) return true

        i = maxJump

        if (nums[maxJump] === 0) { // backtrack
            do {
                i--
                if (i + nums[i] >= len - 1) return true
            } while (i + nums[i] <= maxJump && i > 0)
            if (i <= 0) return false

            i = i + nums[i]
        }
    }
    
    return true
};

// 思路2，维护可达到的最大距离
var canJump = function(nums) {
    const len = nums.length
    let maxJumpIndex = nums[0]

    for(let i = 1;i <= maxJumpIndex; i++) {
        if (maxJumpIndex >= len - 1) return true
        maxJumpIndex = Math.max(nums[i] + i, maxJumpIndex)
    }

    return maxJumpIndex >= len - 1
};