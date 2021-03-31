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

const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      withoutArray.push(item);
    }
  }
  return withoutArray;
}

// Test 1
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([6, 7, 9, 12], [6, "9"]));

// Test 2
console.log(assertArraysEqual(without([4, 4, 12, 'lighthouse', 19], [4, "lighthouse"]), [12, 19]));
console.log(assertArraysEqual(without(["hello", 8, 1, "goodbye", 10], [8, "goodbye"]), ["hello", 1, 10]));

// Test 3
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));