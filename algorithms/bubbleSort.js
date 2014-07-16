(function() {
  window.Sorts.prototype.bubbleSort = function (unsortedArray, comparison){
    var sorted;
    var temp;

    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    for (var i = 0; i < unsortedArray.length; i++) {
      sorted = true;
      for (var j = 1; j < unsortedArray.length - i; j++) {
        if (comparison(unsortedArray[j-1], unsortedArray[j]) > 0) {
          temp = unsortedArray[j];
          unsortedArray[j] = unsortedArray[j - 1];
          unsortedArray[j - 1] = temp;
          sorted = false;
        }
      }
      if (sorted === true) {
        return unsortedArray;
      }
    }
  }

})()

// 100,000 length array sorting rand nums 1 - 1,000,000 takes 37,888 ms (37.9 ms)
// // 10,000 length array sorting rand nums 1 - 1,000,000 takes 371 ms (0.4 ms) - n^2 indeed
// var unsortedArray = randomBigArray(10000, 0, 1000000);
// var results = bubbleSort(unsortedArray);
// // var results = bubbleSort([3,1,0]);

// console.log(results.execTime);