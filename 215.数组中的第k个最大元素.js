/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(x) {
        this.heap.push(Number(x));
        this.bubbleUp();
    }

    // 从最后一位开始，维护堆特性
    bubbleUp() {
        // [1,2,3,4] left = (i * 2) + 1
        let index = this.heap.length - 1;
        while (index >= 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            } else {
                // 🌟 易错点
                break;
            }
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 1) return this.heap.pop();
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // 从第一位开始维护堆特性
    bubbleDown() {
        let index = 0;
        while (index < this.heap.length) { // 终止条件 🌟 易错点
            let leftP = index * 2 + 1;
            let rightP = index * 2 + 2;
            let swapIndex = null;
            // leftP < this.heap.length  🌟 易错点
            if (leftP < this.heap.length && this.heap[leftP] < this.heap[index]) swapIndex = leftP;
            if (rightP < this.heap.length) {
                if (swapIndex === null && this.heap[rightP] < this.heap[index] || swapIndex !== null && this.heap[rightP] < this.heap[leftP]) swapIndex = rightP;
            }
            if (swapIndex === null) break; // 终止条件 🌟 易错点
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]]
            index = swapIndex;
        }
    }

    size() {
        return this.heap.length;
    }
}

var findKthLargest = function (nums, k) {
    // nums.sort((a, b) => b - a);

    let Heap = new MinHeap();

    for (x of nums) {
        Heap.insert(x);
        if (Heap.size() > k) {
            Heap.extractMin();
        }
    }

    return Heap.extractMin();
};
// @lc code=end

