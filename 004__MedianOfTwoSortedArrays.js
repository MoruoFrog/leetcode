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

    // 添加哨兵
    nums1.push(Number.MAX_VALUE)
    nums2.push(Number.MAX_VALUE)

    while(i + j <= target) {
        if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        }else {
            arr.push(nums2[j])
            j++
        }
    }

    return totalLength % 2 === 1
        ? arr[target]
        : (arr[target] + arr[target - 1]) / 2
};
