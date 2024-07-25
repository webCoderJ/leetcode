/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayDp = function (nums) {
    // maxSum = 0
    // Max(sum(s ~ s+len), maxSum)
    // dp = Sum([s][len])
    // O(N^2)
    let pre = 0;
    let maxSum = nums[0];
    // [-2, 1, 1, 1, -1, 2, 1, 2, 1, -5]
    for (let i = 0; i < nums.length; i++) {
        const ele = nums[i];
        // 决定是否加入，或者重新开始
        pre = Math.max(pre + ele, ele);
        maxSum = Math.max(pre, maxSum);
    }
    return maxSum;
};
function maxSubArrayPrefixSum(nums) {
    let minSum = 0;
    let maxSum = nums[0];
    let prefixSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // 直接累加
        prefixSum += nums[i];
        maxSum = Math.max(maxSum, prefixSum - minSum);
        minSum = Math.min(minSum, prefixSum);
    }
    return maxSum;
}
var maxSubArray = maxSubArrayPrefixSum;
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSubArray;
// @after-stub-for-debug-end