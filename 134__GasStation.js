/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/**
 * 走完一轮，需要走完走完所有站，所以要从正收益的开始，积累gas，跳过负收益最多的一段
 * 从正收益的站开始出发（从gas缺的最多的站的下一站开始）
 * 维护最大负收益
 */
var canCompleteCircuit = function(gas, cost) {
  const l = gas.length
  let min = [0, -1]
  let totalGas = 0
  let totalCost = 0

  gas[-1] = 0
  for(let i = 0; i < l; i++) {
    totalGas += gas[i]
    totalCost += cost[i]

    const gasNeed = gas[i] - cost[i]
    gas[i] = gasNeed + gas[i - 1]

    if (gas[i] < min[0]) {
      min = [gas[i], i]
    }
  }

  if (totalGas >= totalCost) {
    return min[1] + 1 >= l ? 0 : min[1] + 1
  }

  return -1
};