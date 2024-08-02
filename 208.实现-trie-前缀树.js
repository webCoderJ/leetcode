/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function () {
    // isEnd: false
    this.trieList = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let cur = this.trieList;
    for (let i = 0; i < word.length; i++) {
        const s = word[i];

        if (!cur[s]) {
            cur[s] = {};
        }

        cur = cur[s];
    }

    cur.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let cur = this.trieList;
    for (let i = 0; i < word.length; i++) {
        if (!cur[word[i]]) {
            return false;
        } else {
            cur = cur[word[i]];
        }
    }
    return !!cur.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let cur = this.trieList;
    for (let i = 0; i < prefix.length; i++) {
        if (!cur[prefix[i]]) {
            return false;
        } else {
            cur = cur[prefix[i]];
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

