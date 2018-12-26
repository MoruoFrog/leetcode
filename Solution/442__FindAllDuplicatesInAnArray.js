/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n), S(n) solution, use map
var findDuplicates = function (nums) {
    const map = {}
    const len = nums.length
    let i = len
    let result = []

    while (i >= 0) {
        let value = nums[i]
        if (map[value]) {
            result.push(value)
        } else {
            map[value] = 1
        }
        i--
    }
    return result
};

// O(n), S(1)
var findDuplicates = function (nums) {
    const result = []

    for (let i = 0; i < nums.length - 1; i++) {
        const num = nums[i]
        if (!num) continue
        if (nums[num] === 0) {
            result.push(num)
        } else {
            let temp = nums[num]
            nums[num] = 0
            nums[i] = temp
            i--
        }
    }

    return result
};
