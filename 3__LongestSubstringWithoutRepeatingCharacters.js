/**
 * @param {string} s
 * @return {number}
 */

// recursion dp with cache
var lengthOfLongestSubstring = function(s) {
    const l = s.length
    if (l === 0) return 0

    // 以i作为最后一位的最长子串长度
    const longestEndWithI = i => {
        if (i === 0) return 1
        if (cache[i]) return cache[i]

        const index = s.indexOf(s[i], i - longestEndWithI(i - 1))
        if(index < i) {
            cache[i] = i - index
        } else {
            cache[i] = longestEndWithI(i - 1) + 1
        }
        return cache[i]
    }

    let result = 1
    let cache = new Array(l)

    for(let i = 0; i < l; i++) {
        result = Math.max(longestEndWithI(i), result)
    }
    
    return result
};

// iterate dp with cache
var lengthOfLongestSubstring = function(s) {
    const l = s.length
    const cache = new Array(l)

    if (l <= 1) return l

    let result = 1
    cache[0] = 1
    for (let i = 1; i < l; i++) {
        let index = s.indexOf(s[i], i - cache[i - 1])
        if (index < i) {
            cache[i] = i - index
        } else {
            cache[i] = cache[i - 1] + 1
        }

        result = Math.max(cache[i], result)
    }

    return result
}

// 使用indexOf比使用cache更快？
var lengthOfLongestSubstring = function(s) {
    const l = s.length
    if (l === 1 || l === 0) return l

    // const map = new Map() // 存最近一个str的key
    let substrStart = 0 // 不重复substr开始的位置
    let result = 1
    for(let i = 0; i < l; i++) {
        const k = s.indexOf(s[i], substrStart) // map.get(s[i])
        if (k >= substrStart && k < i) {
            substrStart = k + 1
        } else {
            result = Math.max(result, i - substrStart + 1)
        }
        // map.set(s[i], i)
    }

    return result
}
