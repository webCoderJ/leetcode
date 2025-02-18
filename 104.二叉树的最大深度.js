/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    function dfs(node) {
        if (!node) return 0;
        let leftDepth = dfs(node.left);
        let rightDepth = dfs(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }
    return dfs(root);
};
// @lc code=end

