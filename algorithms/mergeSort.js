(function() {
    
  var merge = function(leftArr, rightArr) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] <= rightArr[rightIndex]) {
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

  var mergeSort = function(array) {
    // implement natural mergeSort
    // return array if sorted
    var sorted = true;
    var i = 1;
    while (i < array.length && sorted) {
      if (array[i] < array[i-1]) {
        sorted = false;
      }
      i++;
    }
    if (sorted) {
      return array;
    } else {
      var mid = Math.floor(array.length / 2);
      return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
    }
  };

  var mergeBigArray = window.bigArray.slice();
  var initTime = (new Date()).getTime();
  var results = mergeSort(mergeBigArray);
  execTime = (new Date()).getTime() - initTime;

  document.getElementById('merge-time').innerText = execTime.toString();
})()
