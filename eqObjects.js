const assertEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Assertion failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassed);
  } else {
    console.log(assertionFaied);
  }
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const obj1Length = Object.keys(object1).length;
  const obj2Length = Object.keys(object2).length;

  if (obj1Length !== obj2Length) {   //Check both objects have the same amount of keys
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {   //Check that both objects contain the same keys
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {   //Check if key values ar arrays - if so, test if they are equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {    //Check that both objects have the same value for each key
        return false;
      }
    }
  }
  return true;
};

// Test cases - Primitive values
console.log("primitive test cases:");
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
console.log();

// Test cases - array values
console.log("Array test cases:");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
console.log();