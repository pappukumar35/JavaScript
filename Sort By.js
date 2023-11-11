/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */// merge sort
 var sortBy = function(arr, fn) {
    const n = arr.length;
    // base case
    if (n == 1) return arr;
  
    // divide
    const mid = Math.floor(n/2);
    const arrLeft = arr.slice(0, mid); 
    const arrRight = arr.slice(mid, n);
  
    // sort and merge 
    return merge(sortBy(arrLeft, fn), sortBy(arrRight, fn), fn);
  };
  
  /**
   * @param {Array} left
   * @param {Array} right
   * @param {Function} fn
   * @return {Array}
   */// merge function
  function merge (left, right, fn) {
    const sortedArray = [];
    while (left.length > 0 && right.length > 0) {
      // sort and merge
      if (fn(left[0]) < fn(right[0])) {
        sortedArray.push(left[0]);
        left.shift();
      } else {
        sortedArray.push(right[0]);
        right.shift();
      }
    }
  
    return sortedArray.concat(left, right);
  }