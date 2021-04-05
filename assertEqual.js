// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Assertion failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    return assertionPassed;
  } else {
    return assertionFaied;
  }
};

module.exports = assertEqual;
