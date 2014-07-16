(function(){
  window.Sorts.prototype.selectionSort = function(unsortedArray, comparison) {
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    var nextEl;
    var nextElValue;

    for (var i = 0; i < unsortedArray.length; i++) {
      nextEl = i;
      nextElValue = unsortedArray[i];
      for (var j = i; j < unsortedArray.length; j++) {
        if (comparison(nextElValue, unsortedArray[j]) > 0) {
          nextEl = j;
          nextElValue = unsortedArray[j];
        }
      }
      unsortedArray[nextEl] = unsortedArray[i];
      unsortedArray[i] = nextElValue;
    }

    return unsortedArray;
  }
})()