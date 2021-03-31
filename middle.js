// Assertion Functions
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

// Middle Function
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

// Test one or two elements
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));

// Test odd
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

// Test even
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));