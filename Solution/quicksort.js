var quickSort = function(arr) {
    const len = arr.length
    const partition = (start, end) => {
        if (start >= end) return

        let p = Math.floor((end - start) / 2) + start
        let i = start,
            j = end

        while(i !== j) {
            if (arr[i] < arr[p]) {
                i++
                continue
            }

            if (arr[j] > arr[p]) {
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

        partition(start, p - 1)
        partition(p + 1, end)
    }

    partition(0, len - 1)
}

// 新的划分方法
const partition = (arr, start, end) => {
    let i = start + 1
    let j = end

    const tag = arr[start]

    while(i < j) {
        if (arr[i] <= tag) {
            i++
            continue
        }

        if (arr[j] >= tag) {
            j--
            continue
        }

        swap(arr, i, j)
        i++
        j--
    }

    // 根据值判断和谁换
    if (arr[i] > tag || i > end) {
        swap(arr, start, i - 1)
        return i - 1
    }

    swap(arr, start, i)
    return i
}

const swap  = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
