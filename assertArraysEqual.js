const assertArraysEqual = function(actualArray, expectedArray) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actualArray} === ${expectedArray}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actualArray} !== ${expectedArray}`;
  
  if (actualArray.length !== expectedArray.length) {
    console.log(assertionFaied);
  }
  for (const index in actualArray) {
    if (actualArray[index] !== expectedArray[index]) {
      console.log(assertionFaied);
    }
  }
  console.log(assertionPassed);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);