const assertArraysEqual = function(actualArray, expectedArray) {
  const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actualArray} === ${expectedArray}`;
  const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actualArray} !== ${expectedArray}`;
  
  if (actualArray.length !== expectedArray.length) {
    return assertionFaied;
  }
  for (const index in actualArray) {
    if (actualArray[index] !== expectedArray[index]) {
      return assertionFaied;
    }
  }
  return assertionPassed;
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']));
console.log(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]));