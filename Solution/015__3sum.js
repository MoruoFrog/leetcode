/**
 * 不能通过固定头尾，遍历中间来找，因为这样不能覆盖完整的解空间
 * 需要注意哪些条件可以跳过遍历
 * 避免重复
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const result = []
  const len = nums.length

  if (nums[len - 1] < 0) return result
  const max = nums[len - 1] + nums[len - 2]

  for(let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break // 最小值
    if (nums[i] + max < 0) continue // 最大值
    if (i > 0 && nums[i] === nums[i - 1]) continue // 重复,注意这里一定是和i-1判断而不是和i+1判断

    let left = i + 1,
        right = len - 1

    while(left < right) {
      const temp = nums[i] + nums[left] + nums[right]
      if (temp < 0) {
        left++
        while (nums[left] === nums[left - 1]) {
          left++
        }
        continue
      }

      if (temp > 0) {
        right--
        while (nums[right] === nums[right + 1]) {
          right--
        }
        continue
      }

      if (temp === 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
      }

      while (nums[left] === nums[left - 1]) {
        left++
      }

      while (nums[right] === nums[right + 1]) {
        right--
      }
    }
  }

  return result
};
