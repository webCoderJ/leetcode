/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node('head', null);
    this.tail = new Node('tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        // 更新
        this.cut(node);
        this.add(node);
        return node.value;
    }
    return -1;
};

LRUCache.prototype.cut = function (node) {
    let next = node.next;
    let prev = node.prev;
    next.prev = prev;
    prev.next = next;
    node.next = null;
    node.prev = null;
    this.map.delete(node.key);
};

LRUCache.prototype.add = function (node) {
    let tprev = this.tail.prev;
    tprev.next = node;
    node.prev = tprev;
    this.tail.prev = node;
    node.next = this.tail;
    this.map.set(node.key, node);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return;
    if (this.map.has(key)) {
        this.cut(this.map.get(key));
    }
    if (this.map.size >= this.capacity) {
        let lru = this.head.next;
        this.cut(lru);
    }
    this.add(new Node(key, value));
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

