/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    if (!root) return 0;

    let maxSum = -Infinity;

    function maxGain(node) {
        if (node === null) return 0;

        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);

        let currentPathSum = node.val + leftGain + rightGain;

        // // 当前路径是否最大
        maxSum = Math.max(maxSum, currentPathSum);

        // 选择一个节点作为贡献值
        return Math.max(leftGain, rightGain) + node.val;
    }

    maxGain(root);

    return maxSum;
};

var maxPathSum2 = function (root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        // 深度优先
        let leftGain = Math.max(dfs(node.left), 0);
        let rightGain = Math.max(dfs(node.right), 0);

        maxSum = Math.max(node.val + leftGain + rightGain, maxSum);

        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);

    return maxSum;
}

var maxPathSum = maxPathSum2;
// @lc code=end

