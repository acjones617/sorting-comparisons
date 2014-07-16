/* global primeTester, describe, it, expect, should */

describe('sorting functions', function () {
  'use strict';

  beforeEach(function() {
    var unsortedArray = [5,2,7,9,12,51,2,9];
    var stableArray = [{'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 8, 'el2': 1}, {'el1': 1, 'el2': 5}];
  });

  describe('bubble sort', function() {
    it('exists', function() {
      expect(window.sorts.bubbleSort).to.be.a('function');
    });

    it('sorts correctly', function() {
      expect(window.sorts.bubbleSort(unsortedArray)).to.equal([2,2,5,7,9,9,12,51]);
    });

    it('sort is stable', function() {
      var comparison = function(a, b) {
        if (a.el2 < b.el2) {
          return 1;
        } else if (a.el2 > b.el2) {
          return -1;
        } else {
          return 0;
        }
      }
      expect(window.sorts.bubbleSort(stableArray, comparison)).to.equal([{'el1': 8, 'el2': 1}, {'el1': 9, 'el2': 3}, {'el1': 2, 'el2': 5}, {'el1': 1, 'el2': 5}]);
    });
  })

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
