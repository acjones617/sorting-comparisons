/* global primeTester, describe, it, expect, should */

describe('sorting functions', function () {
  'use strict';

  var algorithms = new window.Sorts();

  describe('bubble sort', function() {
    var unsortedArray = [5,2,7,9,12,51,2,9];
    var stableArray = [{'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 8, 'el2': 1}, {'el1': 1, 'el2': 5}];

    it('exists', function() {
      expect(algorithms.bubbleSort).to.be.a('function');
    });

    it('sorts correctly', function() {
      expect(algorithms.bubbleSort(unsortedArray)).to.eql([2,2,5,7,9,9,12,51]);
    });

    it('sort is stable', function() {
      var comparison = function(a, b) {
        if (a.el2 > b.el2) {
          return 1;
        } else if (a.el2 < b.el2) {
          return -1;
        } else {
          return 0;
        }
      }
      var sortedArray = algorithms.bubbleSort(stableArray, comparison);
      expect(sortedArray). to.eql([{'el1': 8, 'el2': 1}, {'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 1, 'el2': 5}]);
      expect(sortedArray[2].el1).to.equal(2);
      expect(sortedArray[3].el2).to.equal(5);
    });
  });

  describe('selection sort', function() {
    var unsortedArray = [5,2,7,9,12,51,2,9];
    var stableArray = [{'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 8, 'el2': 1}, {'el1': 1, 'el2': 5}];

    it('exists', function() {
      expect(algorithms.selectionSort).to.be.a('function');
    });

    it('sorts correctly', function() {
      expect(algorithms.selectionSort(unsortedArray)).to.eql([2,2,5,7,9,9,12,51]);
    });

    it('sort is stable', function() {
      var comparison = function(a, b) {
        if (a.el2 > b.el2) {
          return 1;
        } else if (a.el2 < b.el2) {
          return -1;
        } else {
          return 0;
        }
      }
      var sortedArray = algorithms.selectionSort(stableArray, comparison);
      expect(sortedArray). to.eql([{'el1': 8, 'el2': 1}, {'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 1, 'el2': 5}]);
      expect(sortedArray[2].el1).to.equal(2);
      expect(sortedArray[3].el2).to.equal(5);
    });
  });

  describe('insertion sort', function() {
    var unsortedArray = [5,2,7,9,12,51,2,9];
    var stableArray = [{'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 8, 'el2': 1}, {'el1': 1, 'el2': 5}];

    it('exists', function() {
      expect(algorithms.insertionSort).to.be.a('function');
    });

    it('sorts correctly', function() {
      var sortedArray = algorithms.insertionSort(unsortedArray);
      expect(sortedArray).to.eql([2,2,5,7,9,9,12,51]);
    });

    it('sort is stable', function() {
      var comparison = function(a, b) {
        if (a.el2 > b.el2) {
          return 1;
        } else if (a.el2 < b.el2) {
          return -1;
        } else {
          return 0;
        }
      }
      var sortedArray = algorithms.insertionSort(stableArray, comparison);
      expect(sortedArray). to.eql([{'el1': 8, 'el2': 1}, {'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 1, 'el2': 5}]);
      expect(sortedArray[2].el1).to.equal(2);
      expect(sortedArray[3].el2).to.equal(5);
    });
  });

  describe('merge sort', function() {
    var unsortedArray = [5,2,7,9,12,51,2,9];
    var stableArray = [{'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 8, 'el2': 1}, {'el1': 1, 'el2': 5}];

    it('exists', function() {
      expect(algorithms.mergeSort).to.be.a('function');
    });

    it('sorts correctly', function() {
      expect(algorithms.mergeSort(unsortedArray)).to.eql([2,2,5,7,9,9,12,51]);
    });

    it('sort is stable', function() {
      var comparison = function(a, b) {
        if (a.el2 > b.el2) {
          return 1;
        } else if (a.el2 < b.el2) {
          return -1;
        } else {
          return 0;
        }
      }
      var sortedArray = algorithms.mergeSort(stableArray, comparison);
      expect(sortedArray). to.eql([{'el1': 8, 'el2': 1}, {'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 1, 'el2': 5}]);
      expect(sortedArray[2].el1).to.equal(2);
      expect(sortedArray[3].el2).to.equal(5);
    });
  });

  // Add more assertions here
});
