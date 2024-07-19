/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 当前位置左边最大高度
    let leftPreMax = height[0];
    let leftMax = [leftPreMax];
    for (let i = 0; i < height.length; i++) {
        const element = height[i];
        if (element > leftPreMax) {
            leftPreMax = element;
        }
        leftMax[i] = leftPreMax;
    }

    // 当前位置右边最大高度
    let rightPreMax = height[height.length - 1];
    let rightMax = [rightPreMax];
    for (let i = height.length - 1; i >= 0; i--) {
        const element = height[i];
        if (element > rightPreMax) {
            rightPreMax = element;
        }
        rightMax[i] = rightPreMax;
    }

    let sum = 0;
    for (let i = 0; i < height.length; i++) {
        if (leftMax[i] > 0 && rightMax[i] > 0) {
            let sh = Math.min(leftMax[i], rightMax[i]) - height[i];
            sum += (sh * 1);
        }
    }

    return sum;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end