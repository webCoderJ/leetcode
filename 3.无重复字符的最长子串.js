/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let left = 0;
    let map = new Map();
    let maxLen = 1;
    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (map.has(ele)) {
            // 移动左边界
            left = Math.max(map.get(ele) + 1, left);
        }
        map.set(ele, i);
        maxLen = Math.max(maxLen, i - left + 1);
    }
    return maxLen;
};
// @lc code=end
