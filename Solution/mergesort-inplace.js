// 原地归并排序，数组元素是数字

// '手摇'算法，交换内存，反转再反转
// part位置的元素归为后一组
const exch = (arr, start, part, end) => {
    reverse(arr, start, part - 1)
    reverse(arr, part, end)
    reverse(arr, start, end)
}

const reverse = (arr, start, end) => {
    for(let i = start, j = end; i < j; i++, j--) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

const merge = (arr, start, part, end) => {
    let i = start
    let j = part
    let startJ = j

    while(i < j) {
        // 保证i左侧是排序好的
        if (arr[i] < arr[startJ]) {
            i++
            continue
        }

        // 找到所有小于arr[i]的j
        if (arr[i] > arr[j] && j <= end) {
            j++
            continue
        }

        // 把startJ, j和i, startJ进行交换，并移动i
        exch(arr, i, startJ, j - 1)
        i += j - startJ + 1
        startJ = j
    }
}

// 在数组足够小时，做插入排序，提高归并排序性能
const insertSort = (arr, start, end) => {
    for(let i = start; i <= end; i++) {
        const val = arr[i]
        let j = i - 1
        while(j >= start && val < arr[j]) {
            // 交换
            const temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            j--
        }
    }
}

const mergeSortInplace = (arr) => {
    const recur = (arr, start, end) => {
        // if (start >= end) return
        // 小数量使用插入排序
        if (end - start < 3) {
            insertSort(arr, start, end)
            return
        }
        const part = Math.ceil((end - start) / 2) + start
        recur(arr, start, part - 1)
        recur(arr, part, end)
        merge(arr, start, part, end)
    }

    recur(arr, 0, arr.length - 1)
}
