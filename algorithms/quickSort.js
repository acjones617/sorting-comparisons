// in place quickSort

(function(){
  var swapElements = function(unsortedArray, i1, i2) {
    var temp = unsortedArray[i1];
    unsortedArray[i1] = unsortedArray[i2];
    unsortedArray[i2] = temp;
  };

  var partition = function (unsortedArray, comparison, lo, hi){
    var pivotPoint = pivot(unsortedArray, lo, hi);
    var pivotValue = unsortedArray[pivotPoint];
    var storeIndex = lo;
    // move pivot to end of partition to get it out of the way
    swapElements(unsortedArray, hi, pivotPoint);
    for (var i = lo; i < hi; i++) {
      if (comparison(pivotValue, unsortedArray[i]) > 0) {
        // leftpartition
        swapElements(unsortedArray, storeIndex++, i);
      }
    }
    // move partition to correct spot;
    swapElements(unsortedArray, storeIndex, hi);
    return storeIndex;
  };

  var pivot = function (unsortedArray, lo, hi){
    // median of lo, hi, mid - slower on avg, but way faster if array already sorted
    // return Math.floor((hi + lo) / 2);
    // var mid = Math.floor((hi + lo)/2);
    // var loValue = unsortedArray[lo];
    // var midValue = unsortedArray[mid];
    // var hiValue = unsortedArray[hi];
    // if ((midValue <= loValue && midValue >= hiValue) || (midValue >= loValue && midValue <= hiValue)) {
    //   return mid;
    // } else if ((loValue <= midValue && loValue >= hiValue) || (loValue >= midValue && loValue <= hiValue)) {
    //   return lo;
    // }
    return hi;
  };

  window.Sorts.prototype.quickSort = function (unsortedArray, comparison, lo, hi){
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    lo = lo || 0;
    if (hi === undefined) {
      hi = unsortedArray.length - 1;
    }

    if (lo < hi) {
      var lastPivot = partition(unsortedArray, comparison, lo, hi);
      this.quickSort(unsortedArray, comparison, lo, lastPivot-1);
      this.quickSort(unsortedArray, comparison, lastPivot+1, hi);
    }

    return unsortedArray;
  };
})();
