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

            let temp = a[i]
            a[i] = a[j]
            a[j] = temp
            if (i === p) {
                p = j
            }else if (j === p) {
                p = i
            }
        }

        partition(start, p - 1)
        partition(p + 1, end)
    }

    partition(0, len - 1)
    
}