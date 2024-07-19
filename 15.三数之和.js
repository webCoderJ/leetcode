/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let c = nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        // 二分 why
        while (left < right) {
            let sum = c + nums[left] + nums[right];
            if (sum === 0) {
                result.push([c, nums[left], nums[right]]);
                // 去重
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // 移动指针
                left++;
                right--;
            } else {
                if (sum > 0) { // 多了
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    // console.log('🚀 ~ threeSum ~ result:', nums, result)
    return result;
};
// @lc code=end

/**
 * 暴力演算
 * @param {*} arr 
 * @param {*} t 
 * @returns 
 */
function twoSum(arr, t) {
    const res = [];
    const map = new Map();
    // for (let i = 0; i < arr.length; i++) {
    //     map.set(arr[i], i);
    // }
    for (let i = 0; i < arr.length; i++) {
        let rest = t - arr[i];
        if (map.has(rest)) {
            res.push([rest, arr[i]]);
            // 跳过重复的元素
            while (i + 1 < arr.length && arr[i] === arr[i + 1]) i++;
        }
        // 边存边查，提高效率
        map.set(arr[i], i);
    }
    return res;
}
var threeSumN2 = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // 跳过重复的元素
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        const el = nums[i];
        const resSets = twoSum(nums.slice(i + 1), 0 - el);
        for (let set of resSets) {
            result.push([el, ...set]);
        }
    }

    // console.log('🚀 ~ threeSum ~ result:', nums, result)
    return result;
};