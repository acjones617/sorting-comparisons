(function() {
  var sort = function(type, algorithms) {
    var arrayCopy = algorithms.bigArray.slice();
    var initTime = (new Date()).getTime();
    var results = algorithms[type+'Sort'](arrayCopy);
    execTime = (new Date()).getTime() - initTime;

    document.getElementById(type+'-time').innerText = execTime.toString();
  };

  window.addEventListener('load', function() {
    var algorithms = new window.Sorts();

    sort('bubble', algorithms);
    sort('selection', algorithms);
    sort('insertion', algorithms);
    sort('merge', algorithms);

  });

})();