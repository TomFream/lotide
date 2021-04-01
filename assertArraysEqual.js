const assertArraysEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actual} !== ${expected}`;
  
  if (actual.length !== expected.length) {
    console.log(assertionFaied);
  }
  for (const index in actual) {
    if (actual[index] !== expected[index]) {
      console.log(assertionFaied);
    }
  }
  console.log(assertionPassed);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);