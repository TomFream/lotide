const flatten = function(arr) {
  let flattenedArray = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        flattenedArray.push(subElement);
      }
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

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

//Test 1
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

// Test 2
assertArraysEqual(flatten([33, 2, ["hello", 7], "goodbye"]), [33, 2, "hello", 7, "goodbye"]);
