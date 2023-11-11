function createCounter(start) {
    let count = start;
    return function() {
      return count++;
    }
  }