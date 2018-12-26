/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * Example:
 * Input: [1,2,0]
 * Output: 3
 * @param {number[]} nums
 * @return {number}
 */

// O(n) S(n) solution
var firstMissingPositive = function(nums) {
    nums = nums.filter(num => num > 0)
    const len = nums.length + 1 // 多了第一位0，所以要+1

    const bitMap = new Int8Array(len).fill(0)

    nums.forEach((value, index) => {
        bitMap[value] = 1
    })

    for(let i = 1; i < len; i++) {
        if (bitMap[i] === 0) return i
    }

    return len
}

// O(n) S(1) solution
var firstMissingPositive = function(nums) {
    nums = nums.filter(num => num > 0)
    nums.unshift(0)
    const len = nums.length

    for(let i = 0; i < len; i++) {
        const value = nums[i]
        if (value > len) continue
        if (nums[value] === 0) continue // 0 means exist

        nums[i--] = nums[value] // exchange
        nums[value] = 0
    }

    for(let i = 1; i < len; i++) {
        if (nums[i] !== 0) return i
    }

    return len
}


/**
 * 类似bitMap，注意需要长度+1
 * bitMap的思路的都可以考虑是否可以使用原数组，通过交换元素实现
 */