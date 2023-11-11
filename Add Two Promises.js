/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
  };
  
  // // Example usage:
  // var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
  // var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
  // addTwoPromises(promise1, promise2)
  //   .then(console.log); // Output: 7