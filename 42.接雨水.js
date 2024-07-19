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
var trapByDp = function (height) {
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
// time: O(N) space: O(1)
function trapByDoublePointer(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[0];
    let rightMax = height[right];
    let water = 0;

    // left++;
    // right--;

    while (left <= right) {
        leftMax = Math.max(height[left], leftMax);
        rightMax = Math.max(height[right], rightMax);
        if (leftMax < rightMax) {
            water += leftMax - height[left];
            left++;
        } else {
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}
function trapByStack(height) {
    let stack = [];
    let water = 0;
    let p = 0;

    while (p < height.length) {

        // 找到接水区域
        while (height[p] > height[stack[stack.length - 1]]) {
            const bottomIndex = stack.pop();
            // 空栈，终止
            if (stack.length === 0) break;
            let w = p - stack[stack.length - 1] - 1;
            let h = Math.min(height[stack[stack.length - 1]], height[p]) - height[bottomIndex];
            water += w * h;
        }

        stack.push(p);
        p++;
    }

    return water;
}
var trap = trapByStack;
// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end