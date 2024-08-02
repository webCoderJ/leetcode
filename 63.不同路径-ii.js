/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    var dp = new Array(m).fill().map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        let isObs = obstacleGrid[i][0];
        if (isObs === 1) {
            dp[i][0] = 0;
            break;
        } else {
            dp[i][0] = 1;
        }
    }
    for (let i = 0; i < n; i++) {
        let isObs = obstacleGrid[0][i];
        if (isObs === 1) {
            dp[0][i] = 0;
            break;
        } else {
            dp[0][i] = 1;
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let isObs = obstacleGrid[i][j];
            if (isObs === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};
// @lc code=end

