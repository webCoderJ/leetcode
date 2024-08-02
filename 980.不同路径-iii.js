/*
 * @lc app=leetcode.cn id=980 lang=javascript
 *
 * [980] 不同路径 III
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let h = grid.length - 1;
    let w = grid[0].length - 1;
    let maxDepth = grid.flat(2).filter(it => it !== -1).length - 1;
    let pathNumber = 0;
    let used = new Array(h + 1).fill(0).map(() => new Array(w + 1).fill(false));

    // 找到起点
    let sx, sy;
    for (let i = 0; i <= h; i++) {
        for (let j = 0; j <= w; j++) {
            if (grid[i][j] === 1) {
                sx = j;
                sy = i;
            }
        }
    }

    function backTrack(depth, x, y) {
        // 走完了
        if (depth > maxDepth) return;
        // 出边界了
        if (x < 0 || x > w) return;
        if (y < 0 || y > h) return;
        // 已经当前路径下已经使用过
        if (used[y][x]) return;
        // 到达终点(必须使用完所有点)
        if (depth === maxDepth && grid[y][x] === 2) {
            pathNumber += 1;
            return;
        };
        // 障碍点
        if (grid[y][x] === -1) return;
        used[y][x] = true;
        // 探索不同方向
        backTrack(depth + 1, x - 1, y);
        backTrack(depth + 1, x + 1, y);
        backTrack(depth + 1, x, y - 1);
        backTrack(depth + 1, x, y + 1);
        used[y][x] = false;
    }

    backTrack(0, sx, sy);

    return pathNumber;
};
// @lc code=end
