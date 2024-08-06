/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function reverseListNode(head) {
    let cur = head;
    let prev = null;
    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}
var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;

    // 🌟易错：left 是代表 len 不是下标，因此要 -1
    // -1->0->1->2->3->4->5
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    let leftNode = pre.next;
    let rightNode = pre;
    for (let i = 0; i < (right - left) + 1; i++) {
        rightNode = rightNode.next;
    }

    let tailHead = rightNode.next;

    // 🌟易错：不切断循环终止有问题。
    rightNode.next = null;
    let reversedHead = reverseListNode(leftNode);

    pre.next = reversedHead;
    leftNode.next = tailHead;

    return dummy.next;
};
// @lc code=end

