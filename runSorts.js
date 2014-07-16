(function() {
  window.sort = function(type, arraySort) {
    var arrayCopy = window.bigArray.slice();
    var initTime = (new Date()).getTime();
    var results = arraySort(arrayCopy);
    execTime = (new Date()).getTime() - initTime;

    document.getElementById(type+'-time').innerText = execTime.toString();

    console.log(execTime, type, arrayCopy.length);
  }
})();