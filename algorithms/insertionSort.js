(function(){
  window.Sorts.prototype.insertionSort = function (unsortedArray, comparison){
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }
    
    var result = [];
    var nextEl;
    var nextElValue;

    while (unsortedArray.length) {
      nextEl = 0;
      nextElValue = unsortedArray[0];

      for (var i = 0; i < unsortedArray.length; i++) {
        if (comparison(nextElValue, unsortedArray[i]) > 0) {
          nextEl = i;
          nextElValue = unsortedArray[i];
        }
      }

      result.push(nextElValue);
      unsortedArray.splice(nextEl,1);
    }

    unsortedArray = result;
    return result;
  }

})();
