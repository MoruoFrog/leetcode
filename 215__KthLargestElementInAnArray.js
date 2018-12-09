/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 1 ≤ k ≤ array's length
 */

// O(n * k), S(k)
var findKthLargest = function (nums, k) {
    const result = nums.slice(0, k)
    result.sort((a, b) => a - b)

    for (let i = k; i < nums.length; i++) {
        let num = nums[i]
        if (num <= result[0]) continue

        for (let j = k - 1; j >= 0; j--) {
            if (num > result[j]) {
                result.splice(j + 1, 0, num)
                result.shift()
                break
            }
        }
    }
    return result[0]
};

// 利用快排S(1), O(n)

// 快排的一次划分
const partition = (arr, start, end) => {
    if (start >= end) {
        return end
    }
    let p = Math.floor((end - start) / 2) + start
    let i = start,
        j = end

    while (i !== j) {
        if (arr[i] > arr[p]) {
            i++
            continue
        }

        if (arr[j] < arr[p]) {
            j--
            continue
        }

        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        if (i === p) {
            p = j
            i++
        } else if (j === p) {
            p = i
            j--
        } else {
            i++
            j--
        }
    }
    return p
};

// 注意不使用递归的话，需要手动维护stat和end
var findKthLargest = function (nums, k) {
    let start = 0
    let end = nums.length - 1

    let p = partition(nums, start, end)

    while (p !== k - 1) {
        if (p > k - 1) {
            end = p - 1
            p = partition(nums, start, end)
        }

        if (p < k - 1) {
            start = p + 1
            p = partition(nums, start, end)
        }
    }
    return nums[p]
};

// 递归
var findKthLargest = function (nums, k) {
    const quickSelect = (nums, start, end) => {
        let p = partition(nums, start, end)

        if (p === k - 1) return nums[p]

        if (p > k - 1) {
            return quickSelect(nums, start, p - 1)
        }

        return quickSelect(nums, p + 1, end)
    }

    return quickSelect(nums, 0, nums.length - 1)
}

// 小顶堆
const adjHeap = (arr, i) => {
    if (i >= Math.floor(arr.length / 2)) return

    if (arr[i] > left(arr, i)) {
        swap(arr, i, i * 2 + 1)
    }
    if (arr[i] > right(arr, i)) {
        swap(arr, i, i * 2 + 2)
    }

    adjHeap(arr, i * 2 + 1)
    adjHeap(arr, i * 2 + 2)
}

const left = (arr, i) => arr[i * 2 + 1] === undefined ? Number.MAX_VALUE : arr[i * 2 + 1]
const right = (arr, i) => arr[i * 2 + 1 + 1] === undefined ? Number.MAX_VALUE : arr[i * 2 + 1 + 1]
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const buildHeap = arr => {
    let i = Math.floor(arr.length / 2) - 1
    while(i >= 0) {
        adjHeap(arr, i)
        i--
    }
}

var findKthLargest = function (nums, k) {
    const heap = nums.slice(0, k)

    buildHeap(heap)

    for(let i = k; i < nums.length; i++) {
        if (arr[i] > heap[0]) {
            heap[0] = arr[i]
            adjHeap(heap, 0)
        }
    }
    return heap[0]
}
