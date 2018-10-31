/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// you can also use the left 0 area to store temp value
var merge = function(nums1, m, nums2, n) {
    let i = j = 0
    let total = m + n
    while(j < n) {
        if (nums2[j] < nums1[i] || (i >= m + j && nums1[i] === 0)) {
            nums1.splice(i, 0, nums2[j])
            nums1.pop()
            j++
            i++
        } else {
            i++
        }
    }
};