const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actual} !== ${expected}`;
  
  if (eqArrays(actual, expected)) {
    return  assertionPassed;
  }
  return assertionFaied;
};

module.exports = assertArraysEqual;