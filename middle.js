const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const middleArray = [];
  const midIndex = arr.length / 2;
  if (midIndex <= 1) {
    return middleArray;
  }
  if (Number.isInteger(midIndex)) {
    middleArray.push(arr[midIndex - 1], arr[midIndex]);
  } else {
    middleArray.push(arr[Math.floor(midIndex)]);
  }
  return middleArray;
};

module.exports = middle;