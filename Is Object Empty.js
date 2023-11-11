/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
function isEmpty(input) {
    // Check for object
    if (typeof input === 'object' && !Array.isArray(input)) {
      return Object.keys(input).length === 0;
    }
    
    // Check for array
    if (Array.isArray(input)) {
      return input.length === 0;
    }
    
    // Other data types are not considered empty
    return false;
  }