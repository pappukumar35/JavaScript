var flat = function (arr, n, tempArray = [], currentCycle = 0) {
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index]) && currentCycle < n) {
            flat(arr[index], n, tempArray, currentCycle + 1)
        } else {
            tempArray.push(arr[index])
        }
    }
    return tempArray
};