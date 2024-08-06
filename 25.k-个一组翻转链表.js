/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    function reverseList(fromPre, to) {
        let cur = fromPre.next;
        let prev = fromPre;
        while (cur !== to) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
    }
    let dummy = new ListNode(-1);
    dummy.next = head;
    // 指向 head
    let cur = dummy;
    // 初始化第一段头
    let revHeadPre = dummy;
    let i = 0;
    while (cur.next) {
        cur = cur.next;
        i++;
        if (i % k === 0) {
            // 🌟 易错点：区间反转要用()左右闭合区间
            let nextSegHead = cur.next;
            reverseList(revHeadPre, nextSegHead);

            // 🌟 易错点：记录反转过后的尾巴
            let segmengTail = revHeadPre.next;

            // 重新连接
            revHeadPre.next.next = nextSegHead;
            revHeadPre.next = cur;

            // 移动
            revHeadPre = segmengTail;
            cur = segmengTail;
        }
    }
    return dummy.next;
};
// @lc code=end
