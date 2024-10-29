const removeFromArray = function(arr) {
    numOfElementsToRemove = arguments.length;
    arrLen = arr.length;

    for(i = 0; i < arrLen; i++) {
        for (j = 1
            ; j < numOfElementsToRemove; j++) {
            if (arr[i] === arguments[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;

};
console.log(removeFromArray(removeFromArray([1, 2, 3, 4], 3, 2)))

// Do not edit below this line
module.exports = removeFromArray;
