(function() {
  var randomInt = function(min, max) {
    min = min || 0;
    max = max || 1;
    return Math.floor(Math.random() * (max - min) + min);
  }


  var randomBigArray = function(size, min, max) {
    var result = [];
    size = size || 100;
    min = min || 0;
    max = max || 100;
    for (var i = 0; i < size; i++){
      result.push(randomInt(min, max));
    }
    return result;
  }

  var orderedBigArray = function(size, min, max) {
    var result = [];
    size = size || 100;
    min = min || 0;
    max = max || 100;
    for (var i = 0; i < size; i++){
      result.push(i);
    }
    return result;
  }

  var minNum = 0;
  var maxNum = 1000000;
  var size = 10000;

  // if no comparison provided, use the below:
  // if returns less than 0, sort a to lower index than b
  // if returns greater than 0, sort b to lower index than a
  // sorts from lowest to highest
  window.genericComparison = function(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  window.Sorts = function() {
    this.bigArray = randomBigArray(size, minNum, maxNum);
    // this.orderedArray = orderedBigArray(size, minNum, maxNum);
    this.minNum = minNum;
    this.maxNum = maxNum;
    this.size = size;
  };
})()
