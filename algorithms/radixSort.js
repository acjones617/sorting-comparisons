(function(){
  window.Sorts.prototype.radixSort = function (unsortedArray, comparison){
    // place in charLength object
    var charLength = {};
    var el;
    var elLength;
    for (var i = 0; i < unsortedArray.length; i++) {
      el = unsortedArray[i];
      elLength = el.toString().length
      charLength[elLength] = charLength[elLength] || [];
      charLength[elLength].push(el);
    }

    // sort one by one, in place
    // sort keys of object
    // concat into final array
    for (var bucket in charLength) {
      this.quickSort(charLength[bucket], comparison);
    }

    var lengthKeys = Object.keys(charLength);
    for (var j = 0; j < lengthKeys.length; j++) {
      // convert back to int
      lengthKeys[j] = +lengthKeys[j];
    }

    this.selectionSort(lengthKeys, comparison);

    unsortedArray = [];

    for (var k = 0; k < lengthKeys.length; k++) {
      unsortedArray = unsortedArray.concat(charLength[lengthKeys[k]]);
    }
    return unsortedArray;
  }
})();