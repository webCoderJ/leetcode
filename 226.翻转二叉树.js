/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    function loop(node) {
        if (!node) return;
        let left = node.left;
        let right = node.right;
        node.left = right;
        node.right = left;
        if (node.left) loop(node.left);
        if (node.right) loop(node.right);
    }
    loop(root);
    return root;
};
// @lc code=end

