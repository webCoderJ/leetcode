/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.');
    let v2 = version2.split('.');

    let maxLen = Math.max(v1.length, v2.length);

    for (i = 0; i < maxLen; i++) {
        let v1c = parseInt(v1[i] || 0);
        let v2c = parseInt(v2[i] || 0);
        if (v1c > v2c) return 1;
        if (v1c < v2c) return -1;
    }
    return 0;
};
// @lc code=end

