(function() {
  var selectionSort = function(unsortedArray, comparison) {
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

    var nextEl;
    var nextElValue;

    for (var i = 0; i < unsortedArray.length; i++) {
      nextEl = i;
      nextElValue = unsortedArray[i];
      for (var j = i; j < unsortedArray.length; j++) {
        if (comparison(unsortedArray[j], nextElValue) > 0) {
          nextEl = j;
          nextElValue = unsortedArray[j];
        }
      }
      unsortedArray[nextEl] = unsortedArray[i];
      unsortedArray[i] = nextElValue;
    }

    return unsortedArray;
  }

  window.addEventListener('load', function() {
    window.sort('selection', selectionSort);
  });
})()