/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = []
    const len = nums.length
    
    nums.sort((a, b) => a - b)
    
    const threeSum = (nums, target) => {
        const result = []
        const len = nums.length

        for(let i = 0; i < len; i++) {
            // 减少计算
            if (nums[i] + nums[i + 1] + nums[i + 2] > target) {
                continue
            }
            if (nums[i] + nums[len - 1] + nums[len - 2] < target) {
                continue
            }

            const val = nums[i]
            if (val === nums[i - 1]) continue

            const twoSumTarget = target - val
            let head = i + 1
            let tail = len - 1

            while(head < tail) {
                const sum = nums[head] + nums[tail]
                const headValue = nums[head]
                const tailValue = nums[tail]

                if (sum === twoSumTarget) {
                    result.push([val, headValue, tailValue])

                    do {
                        head++
                    } while(headValue === nums[head])

                    do {
                        tail--
                    } while(tailValue === nums[tail])
                } else if (sum > twoSumTarget) {
                    do {
                        tail--
                    } while(tailValue === nums[tail])
                } else {
                    do {
                        head++
                    } while(headValue === nums[head])
                }
            }
        }

        return result
    }
    
    for(let i = 0; i <len; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            continue
        }
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
            continue
        }
        const val = nums[i]
        if (val === nums[i - 1]) continue

        const threeSumResult = threeSum(nums.slice(i + 1), target - val)
        result.push(...(threeSumResult.map(arr => [val, ...arr])))
    }
    return result
}

/**
 * 4SUm --> 3Sum
 */