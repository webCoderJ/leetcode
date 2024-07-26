/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    let res = [root.val];
    function loop(node) {
        if (!node) return;
        if (node.left) res.push(node.left.val);
        loop(node.left);
        if (node.right) res.push(node.right.val);
        loop(node.right);
    }
    loop(root);
    return res;
};
// @lc code=end

