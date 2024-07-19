/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let merged = new ListNode(0);
    let mergedHead = merged;
    let f = 0;
    while (l1 || l2) {
        let sum = f;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        f = Math.floor(sum / 10);
        let c = sum % 10;
        merged.val = c;

        if (l1 || l2) {
            merged.next = new ListNode(0);
            merged = merged.next;
        }
    }
    if (f > 0) {
        merged.next = new ListNode(f);
    }
    return mergedHead;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end