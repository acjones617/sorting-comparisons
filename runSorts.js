(function() {
  window.sort = function(type, arraySort) {
    var arrayCopy = window.bigArray.slice();
    var initTime = (new Date()).getTime();
    var results = arraySort(arrayCopy);
    execTime = (new Date()).getTime() - initTime;

    document.getElementById(type+'-time').innerText = execTime.toString();
  };

  // if no comparison provided, use the below:
  window.genericComparison = function(a, b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }
})();