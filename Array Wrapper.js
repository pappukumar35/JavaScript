/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // set this.nums as nums array
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // return accumulated sum by reduce method
    return this.nums.reduce((acc, val) => acc + val, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // return string from array join and template literals
    return `[${this.nums.join(',')}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */