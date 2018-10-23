/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 合并两个有序数组，归并算法的合并部分；并不需要完全合并
var findMedianSortedArrays = function(nums1, nums2) {
    const lenA = nums1.length
    const lenB = nums2.length
    const totalLength = lenA + lenB

    let target = totalLength % 2 === 1
        ? Math.floor(totalLength / 2)
        : totalLength / 2
    let i = 0,
        j = 0,
        arr = []
    
    while(i < lenA && j < lenB && i + j <= target) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        }else {
            arr.push(nums2[j])
            j++
        }
    }

    if (i + j > target) {
        return totalLength % 2 === 1
            ? arr[target]
            : (arr[target] + arr[target - 1]) / 2
    }
    if (i === lenA) {
        if (totalLength % 2 === 1) {
            return nums2[target - lenA]
        }
        const targetA = nums2[target - arr.length + j]
        const targetB = arr.length === target
            ? arr[arr.length - 1]
            : nums2[target - lenA - 1]
        return (targetA + targetB) / 2
    }
    if (j === lenB) {
        if (totalLength % 2 === 1) {
            return nums1[target - lenB]
        }
        const targetA = nums1[target - arr.length + i]
        const targetB = arr.length === target
            ? arr[arr.length - 1]
            : nums1[target - lenB - 1]
        return (targetA + targetB) / 2
    }
};