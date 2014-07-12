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

  var minNum = 0;
  var maxNum = 1000000;
  var size = 100000;

  document.getElementById('array-min').innerText = minNum;
  document.getElementById('array-max').innerText = maxNum;
  document.getElementById('array-size').innerText = size;

  window.bigArray = randomBigArray(size, minNum, size);
})()
