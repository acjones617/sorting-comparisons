(function() {    
  var merge = function (leftArr, rightArr, comparison){
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (comparison(leftArr[leftIndex], rightArr[rightIndex]) > 0) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }

    if (leftIndex < leftArr.length) {
      result = result.concat(leftArr.slice(leftIndex));
    } else {
      // console.log(rightArr.slice(rightIndex))
      result = result.concat(rightArr.slice(rightIndex));
    }

    return result;
  }

  var mergeSort = function (unsortedArray, comparison){
    // implement natural mergeSort
    // return unsortedArray if sorted
    if (typeof comparison !== 'function') {
      comparison = function(a, b) {
        if (a < b) {
          return 1;
        } else if (a > b) {
          return -1;
        } else {
          return 0;
        }
      }
    }

    var sorted = true;
    var i = 1;
    while (i < unsortedArray.length && sorted) {
      if (unsortedArray[i] < unsortedArray[i-1]) {
        sorted = false;
      }
      i++;
    }
    if (sorted) {
      return unsortedArray;
    } else {
      var mid = Math.floor(unsortedArray.length / 2);
      return merge(mergeSort(unsortedArray.slice(0, mid), comparison), mergeSort(unsortedArray.slice(mid), comparison), comparison);;
    }
  };

  window.addEventListener('load', function() {
    window.sort('merge', mergeSort);
  });
})()
