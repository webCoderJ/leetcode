/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root]; // 存层级节点
    let res = [];
    while (queue.length) {
        let curLevelNodes = [];
        let len = queue.length;
        // 当前层所有节点
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            curLevelNodes.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(curLevelNodes);
    }
    return res;
};
// @lc code=end

