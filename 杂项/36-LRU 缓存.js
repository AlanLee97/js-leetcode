/**
 * @param {number} capacity
 */
let LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let hasKey = this.cache.has(key);
    if(hasKey) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 如果有数据，先删除原数据，重新设置数据，以更新数据的位置
    if(this.cache.has(key)) {
        this.cache.delete(key);
    }
    // 超容量，移除第一个数据
    if(this.cache.size === this.capacity) {
        let firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
    }
    // 重新设置数据
    this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


/**
 * v2
 * @param {number} capacity
 */
 let LRUCache2 = function(capacity) {
    this.capacity = capacity;
    this.cache = [];
    // [{key, value}]
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache2.prototype.get = function(key) {
    let targetIndex = -1;
    let hasKey = this.cache.some((item,index) => {
        if(item.key === key) {
            targetIndex = index;
            return true;
        }else {
            return false;
        }
        
    });
    if(hasKey) {
        let dataObj = this.cache[targetIndex];
        this.cache.splice(targetIndex, 1);
        this.cache.push(dataObj);
        return dataObj.value;
    }else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache2.prototype.put = function(key, value) {
    // 如果有数据，先删除原数据，重新设置数据，以更新数据的位置
    let targetIndex = -1;
    let hasKey = this.cache.some((item,index) => {
        if(item.key === key) {
            targetIndex = index;
            return true;
        }else {
            return false;
        }
        
    });
    if(hasKey) {
        this.cache.splice(targetIndex, 1);
    }
    // 超容量，移除第一个数据
    if(this.cache.length === this.capacity) {
        this.cache.shift();
    }
    // 重新设置数据
    this.cache.push({key, value});
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */