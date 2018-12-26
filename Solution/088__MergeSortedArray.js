/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

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

// from tail to head
var merge = function(nums1, m, nums2, n) {
    let j = n - 1
    let i = m - 1
    let k = m + n - 1
    while(k >= 0 && j >= 0) {
        if (i < 0 || nums2[j] > nums1[i]) {
            nums1[k] = nums2[j]
            j--
        } else {
            nums1[k] = nums1[i]
            nums1[i] = 0
            i--
        }
        k--
    }
};