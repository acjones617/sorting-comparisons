(function(){
  var sort = function(type, algorithms) {
    var changed = false;
    if (algorithms.arrayMinNum !== document.getElementById('array-min').value) {
      algorithms.arrayMinNum = document.getElementById('array-min').value;
      changed = true;
    }

    if (algorithms.arrayMaxNum !== document.getElementById('array-max').value) {
      algorithms.arrayMaxNum = document.getElementById('array-max').value;
      changed = true;
    }
    
    if (algorithms.arraySize !== document.getElementById('array-size').value) {
      algorithms.arraySize = document.getElementById('array-size').value;
      changed = true;
    }

    if (changed) {
      algorithms.bigArray = algorithms.newBigArray(algorithms.arraySize, algorithms.arrayMinNum, algorithms.arrayMaxNum);
    }

    var arrayCopy = algorithms.bigArray.slice();
    // var arrayCopy = algorithms.orderedArray.slice();
    var initTime = (new Date()).getTime();
    var results = algorithms[type+'Sort'](arrayCopy);
    execTime = (new Date()).getTime() - initTime;

    document.getElementById(type+'-time').innerText = execTime.toString();
  };

  var sortTypes = {
    'bubble': {maxSize: 20000},
    'selection': {maxSize: 40000},
    'insertion': {maxSize: 40000},
    'merge': {maxSize: 1000000},
    'quick': {maxSize: 5000000},
    'radix': {maxSize: 100000},
    'binarySearch': {maxSize: 100000}
  };


  window.addEventListener('load', function() {
    var algorithms = new window.Sorts();
    document.getElementById('array-min').value = algorithms.arrayMinNum;
    document.getElementById('array-max').value = algorithms.arrayMaxNum;
    document.getElementById('array-size').value = algorithms.arraySize;

    // sort('bubble', algorithms);
    // sort('selection', algorithms);
    // sort('insertion', algorithms);
    // sort('merge', algorithms);
    // sort('quick', algorithms);
    // sort('radix', algorithms);
    // sort('binarySearch', algorithms);
    for (var type in sortTypes) {
      document.getElementById(type+'-run').addEventListener('click', function(event) {
        type = event.target.id.split('-')[0];
        if (document.getElementById('array-size').value > sortTypes[type].maxSize) {
          alert("You probably don't want to run that...");
        } else {
          sort(type, algorithms);
        }
      })
    }
  });



})();