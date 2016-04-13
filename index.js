'use strict';

function splitArray(array, length) {
  var result = [];
  var i = 0;
  var arrayLength = array.length;

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array to split');
  }

  if (typeof length !== 'number') {
    throw new TypeError('Expected a number to split an array in');
  }

  for (i = 0; i < arrayLength; i = i + length) {
    result.push(array.slice(i, i + length));
  }

  return result;
}

module.exports = splitArray;
