/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 中心拓展 O(N^2)
    let max = '';
    function expand(left, right) {
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            left--;
            right++
        }
        return s.substring(left + 1, right);
    }
    for (let i = 0; i < s.length; i++) {
        let s1 = expand(i, i);
        let s2 = expand(i, i + 1);
        let longer = s1.length > s2.length ? s1 : s2;
        max = max.length > longer.length ? max : longer;
    }
    return max;
};

var longestPalindromeFor = function (s) {
    // 暴力演算，超时版 O(N^3)
    let max = '';
    function isPalindrome(s) {
        let l = 0; let r = s.length - 1;
        while (l <= r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        for (let len = 1; len < s.length - i + 1; len++) {
            // abcde
            const str = s.substring(i, len + i);
            if (isPalindrome(str)) {
                max = str.length > max.length ? str : max;
            }
        }
    }
    return max;
};
// @lc code=end

