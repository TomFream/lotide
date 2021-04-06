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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  const assertionPassed = `😘 😘 😘 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  const assertionFaied = `😰 😰 😰 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  
  const actualLength = Object.keys(actual).length;
  const expectedLength = Object.keys(expected).length;

  if (actualLength !== expectedLength) {   //Check both objects have the same amount of keys
    return assertionFaied;
  }
  for (const key of Object.keys(actual)) {
    if (!Object.keys(expected).includes(key)) {   //Check that both objects contain the same keys
      return assertionFaied;
    }
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {   //Check if key values are arrays - if so, test if they are equal
      if (!eqArrays(actual[key], expected[key])) {
        return assertionFaied;
      }
    } else if (actual[key] !== expected[key]) {    //Check that both objects have the same value for each key
      return assertionFaied;
    }
  }
  return assertionPassed;
};

// Test cases - Primitive values
console.log("\nprimitive test cases:");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // True;

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // false

// Test cases - array values
console.log("\nArray test cases:");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); //true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); //false
