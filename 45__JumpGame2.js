/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * https://leetcode.com/problems/jump-game-ii/description/
 */

// 贪心，算出每一步可以跳到的最大范围，
var jump = function(nums) {
    const l = nums.length
    let furthestReach = 0
    let jumpEnd = 0
    let step = 0

    for(let i = 0; i < l - 1; i ++) {
        furthestReach = Math.max(furthestReach, i + nums[i])
        if (furthestReach >= l - 1) return step + 1
        if (i === jumpEnd) {
            step++
            jumpEnd = furthestReach
        }
    }

    return step
};

// 递归动态规划 + hashtable，超时
var jump = function (nums) {
    const map = {}

    function jumpStep(n) {
        if (n === 1) return 0
        if (n === 2) return 1
        if (map[n]) return map[n]

        let recuriveList = []
        for(let i = n - 2; i >= 0; i--) {
            if(nums[i] + i >= n - 1) {
                recuriveList.push(jumpStep(i + 1))
            }
        }

        const result = Math.min(...recuriveList) + 1
        map[n] = result
        return result
    }

    return jumpStep(nums.length)
};

// 迭代动态规划 + hashtable，超时
var jump = function(nums) {
    const l = nums.length
    const f = {
        1: 0,
        2: 1,
    }
    if (f[l]) return f[l]

    let step
    for(let i = 2; i <= l - 1; i++) {
        let j = i - 1
        let list = []
        let step
        while(j >= 0) {
            if (nums[j] + j >= i) {
                list.push(f[j + 1])
                if (nums[j] + j >= l) {
                    step = step ? Math.min(step, f[j + 1] + 1) : f[j + 1] + 1
                }
            }
            j--
        }
        f[i + 1] = Math.min(...list) + 1
        if (step) {
            if (step <= f[i + 1]) return step
        }
    }

    return f[l]
};
