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

