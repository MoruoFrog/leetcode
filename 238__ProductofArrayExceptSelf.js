
/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
 * Example:
 * Input:  [1,2,3,4]
 * Output: [24,12,8,6]
 * Note: Please solve it without division and in O(n). nums 
 */
var productExceptSelf = function(nums) {
    const result = []
    
    nums.reduce((product, value, i) => {
        result[i] = product
        return (value * product)
    }, 1)

    nums.reduceRight((product, value, i) => {
        result[i] *= product
        return (value * product)
    }, 1)
    
    return result
};