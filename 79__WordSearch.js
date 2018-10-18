/**
 * Example:
 *
 * board =
 * [
 *   ['A','B','C','E'],
 *   ['S','F','C','S'],
 *   ['A','D','E','E']
 * ]
 *
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// DFS without recursion, but why slow than recursion
// 手动堆栈比系统堆栈慢，所以迭代的递归优于手动堆栈
const exist = function(board, word) {
    const stack = []

    const M = board.length
    const N = board[0].length

    let i = 0
    let j = 0
    const findStart = (str, index) => {
        for(; i < M; i++) {
            for(j = index || 0; j < N; j++) {
                if (board[i][j] === str) return [i, j]
            }
            index = 0
        }
        return false
    }

    const getRightNeighborStrPos = (pos, str) => {
        const result = []
        const m = pos[0],
            n = pos[1]
        if (m - 1 >=0 && board[m - 1][n] === str) result.push([m - 1, n]) // top
        if (m + 1 < M && board[m + 1][n] === str) result.push([m + 1, n]) // bottom
        if (n + 1 < N && board[m][n + 1] === str ) result.push([m, n + 1]) // right
        if (n - 1 >=0 && board[m][n - 1] === str) result.push([m, n - 1])// left
        return result
    }

    let s = word.charAt(0)
    let start = findStart(s)
    let k = 1

    let nextChildPos = 0

    while(start && k < word.length) {
        const str = word.charAt(k)
        const rightNeighborPos = getRightNeighborStrPos([i, j], str)

        // if don't find str in chlid, back-track
        if (rightNeighborPos.length <= nextChildPos) {
            if (stack.length > 0) {
                let hasNext
                do {
                    [i, j, v, nextChildPos, hasNext] = stack.pop()
                    board[i][j] = v
                    k--
                } while(stack.length > 0 && !hasNext)
                continue
            }

            if (stack.length === 0 ) {
                start = findStart(s, j + 1)
                k = 1
                nextChildPos = 0
                continue
            }
        }

        stack.push([i, j, board[i][j], nextChildPos + 1, rightNeighborPos.length > nextChildPos])
        board[i][j] = '#'

        i = rightNeighborPos[nextChildPos][0]
        j = rightNeighborPos[nextChildPos][1]
        k++
        nextChildPos = 0
    }

    return start && k === word.length
};