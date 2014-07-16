(function() {    
  var merge = function (leftArr, rightArr, comparison){
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (comparison(leftArr[leftIndex], rightArr[rightIndex]) > 0) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      } else {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      }
    }

    if (leftIndex < leftArr.length) {
      result = result.concat(leftArr.slice(leftIndex));
    } else {
      result = result.concat(rightArr.slice(rightIndex));
    }
    return result;
  }

  window.Sorts.prototype.mergeSort = function (unsortedArray, comparison){
    // implement natural mergeSort
    // return unsortedArray if sorted
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    var sorted = true;
    for (var i = 1; i < unsortedArray.length; i++) {
      if (comparison(unsortedArray[i-1], unsortedArray[i]) > 0) {
        sorted = false;
        break;
      }
    }
    
    if (sorted) {
      return unsortedArray;
    } else {
      var mid = Math.floor(unsortedArray.length / 2);
      return unsortedArray = merge(this.mergeSort(unsortedArray.slice(0, mid), comparison), this.mergeSort(unsortedArray.slice(mid), comparison), comparison);
    }
  };

})()
