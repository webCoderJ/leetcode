/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i])
            i++;
        }
        if (nums1[i] > nums2[j]) {
            arr.push(nums2[j])
            j++;
        }
    }

    while (i < nums1.length) {
        arr.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        arr.push(nums2[j]);
        j++;
    }

    let total = arr.length;
    console.log('🚀 ~ findMedianSortedArrays ~ arr:', arr)
    if (total % 2 === 0) {
        let i1 = Math.floor(total / 2);
        let i2 = i1 - 1;
        return (arr[i1] + arr[i2]) / 2
    } else {
        let i1 = Math.floor(total / 2);
        return arr[i1];
    }
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end