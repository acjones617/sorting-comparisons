(function() {
  var makeBST = function (unsortedArray, comparison){
    var bst = [unsortedArray[0]];

    // root is index 0;
    // left node is (2*i + 1);
    // right node is (2*i + 2);

    for (var i = 1; i < unsortedArray.length; i++) {
      placeElement(bst, unsortedArray[i], comparison, 0);
    }

    return bst;
  }

  placeElement = function (bst, element, comparison, index){
    // default to the right
    var indexToPlace = 2*index + 2;

    // check to the left
    if (comparison(bst[index], element) > 0) {
      // to the left
      indexToPlace = 2*index + 1;
    }
    if (bst[indexToPlace] === undefined) {
      bst[indexToPlace] = element;
      return;
    } else {
      placeElement(bst, element, comparison, indexToPlace);
    }
  };

  var bstOrder = function (bst){
    var orderedArray = [];

    // check left and right leaves
    var recurse = function (nextIndex){
      if (bst[2 * nextIndex + 1] !== undefined) {
        recurse(2 * nextIndex + 1);
      }
      // no more to the left
      orderedArray.push(bst[nextIndex]);
      // check to the right
      if (bst[2 * nextIndex + 2] !== undefined) {
        recurse(2 * nextIndex + 2);
      }
    }

    recurse(0);
    return orderedArray;
  };

  window.Sorts.prototype.binarySearchSort = function (unsortedArray, comparison){
    if (typeof comparison !== 'function') {
      comparison = window.genericComparison;
    }

    // first build binary search tree out of array
    var bst = makeBST(unsortedArray, comparison);

    // return in correct order;
    unsortedArray = bstOrder(bst);

    return unsortedArray;
  }
})();

