var bubbleSort = function (unsortedArray, comparison) {
  var initTime = (new Date()).getTime();
  var execTime;
  var sorted;
  var temp;

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

  for (var i = 0; i < unsortedArray.length; i++) {
    sorted = true;
    for (var j = 1; j < unsortedArray.length - i; j++) {
      if (comparison(unsortedArray[j - 1], unsortedArray[j]) < 0) {
        temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j - 1];
        unsortedArray[j - 1] = temp;
        sorted = false;
      }
    }
    if (sorted === true) {
      execTime = (new Date()).getTime() - initTime;
      return {
        execTime: execTime,
        sortedArray: unsortedArray
      }
    }
  }
}


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

// 100,000 length array sorting rand nums 1 - 1,000,000 takes 37,888 ms (37.9 ms)
// 10,000 length array sorting rand nums 1 - 1,000,000 takes 371 ms (0.4 ms) - n^2 indeed
var unsortedArray = randomBigArray(10000, 0, 1000000);
var results = bubbleSort(unsortedArray);
// var results = bubbleSort([3,1,0]);

console.log(results.execTime);