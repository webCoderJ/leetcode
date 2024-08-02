/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 买入点1, 2
    let buy1 = prices[0];
    let buy2 = prices[0];
    let maxProfit1 = 0;
    let maxProfit2 = 0;

    for (let i = 0; i < prices.length; i++) {
        buy1 = Math.min(prices[i], buy1);
        maxProfit1 = Math.max(prices[i] - buy1, maxProfit1);

        buy2 = Math.min(prices[i] - maxProfit1, buy2);
        maxProfit2 = Math.max(prices[i] - buy2, maxProfit2);
    }
    return maxProfit2;
};
// @lc code=end
