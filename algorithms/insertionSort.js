(function(){
  window.Sorts.prototype.insertionSort = function (unsortedArray, comparison){
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }
    
    var result = [];
    var nextElValue;

    for (var i = 0; i < unsortedArray.length; i++) {
      nextElValue = unsortedArray[i];
      for (var j = i; j < unsortedArray.length; j++) {
        if (comparison(nextElValue, unsortedArray[j]) > 0) {
          nextElValue = unsortedArray[j];
        }
        result[i] = nextElValue;
      }
    }

    return result;
  }

})()