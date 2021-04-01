/*
const assertArraysEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actual} !== ${expected}`;
  
  if (actual.length !== expected.length) {
    return assertionFaied;
  }
  for (const index in actual) {
    if (actual[index] !== expected[index]) {
      return assertionFaied; 
    }
  }
  return assertionPassed;
};
*/
const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  for (const index in firstArray) {
    if (firstArray[index] !== secondArray[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actual} !== ${expected}`;
  
  if (eqArrays(actual, expected)) {
    return  assertionPassed;
  }
  return assertionFaied;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));