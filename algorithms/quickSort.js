// (function(){
//   // need to find way to do it in place
//   window.Sorts.prototype.quickSort = function (unsortedArray, comparison){
//     if (typeof comparison !== 'function') {
//       comparison = window.genericComparison;
//     }

//     // pick random index as pivot
//     // put all elements less than pivot on left, all elements greater than on right
//     // recurse through both left and right side of arrays

//     // random pivot 
//     // var pivotPoint = Math.floor(Math.random()*unsortedArray.length);

//     var recurse = function (partition){
//       if (partition.length <= 1) {
//         return partition;
//       }

//       // zero pivot
//       var pivotPoint = 0;

//       // random pivot
//       // var pivotPoint = Math.floor(Math.random()*partition.length);

//       var pivot = partition[pivotPoint];

//       var leftPartition = [];
//       var rightPartition = [];
//       for (var i = 1; i < partition.length; i++) {
//         if (comparison(pivot, partition[i]) > 0) {
//           leftPartition.push(partition[i]);
//         } else {
//           rightPartition.push(partition[i]);
//         }
//       }

//       return recurse(leftPartition, comparison)
//       .concat([pivot])
//       .concat(recurse(rightPartition, comparison));
//     }

//     unsortedArray = recurse(unsortedArray);
//     return unsortedArray;
//   }

// })();


// in place quickSort

(function(){
  // need to find way to do it in place
  window.Sorts.prototype.quickSort = function (unsortedArray, comparison){
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    // pick random index as pivot
    // put all elements less than pivot on left, all elements greater than on right
    // recurse through both left and right side of arrays

    // random pivot 
    // var pivotPoint = Math.floor(Math.random()*unsortedArray.length);
    var recurse = function (partition, lo, hi){
      lo = lo || 0;
      hi = hi || partition.length - 1;
      if (hi - lo >= 1) {
        // zero pivot
        var pivotPoint = hi;

        // random pivot
        // var pivotPoint = Math.floor(Math.random()*partition.length);

        var pivot = partition[pivotPoint];

        var loPoint = lo;
        var hiPoint = hi;
        var placed = true;
        for (var i = lo; i < hiPoint; i++) {
          if (comparison(pivot, partition[i]) <= 0) {
            // rightPartition;
            placed = false;
            for (var j = hiPoint - 1; j > i; j--) {
              if (comparison(pivot, partition[j]) > 0) {
                // leftPartition;
                // swap j and i;
                var temp = partition[i];
                partition[i] = partition[j];
                partition[j] = temp;
                placed = true;
                hiPoint = j;
                break;
              }
            }
            if (!placed) {
              // done
              hiPoint = i;
            }
          }
        }
        // put pivot in spot before hiPoint
        if (hiPoint !== hi) {
          partition.splice(hiPoint, 0, pivot);
          // take pivot out from end
          partition.splice(hi+1, 1);
        }
        recurse(partition, lo, hiPoint - 1);
        recurse(partition, hiPoint + 1, hi);
      }

    }

    recurse(unsortedArray);
    return unsortedArray;
  }

})();
