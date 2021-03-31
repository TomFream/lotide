const assertEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Assertion failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassed);
  } else {
    console.log(assertionFaied);
  }
};

const countLetters = function(str) {
  const countObj = {};
  str = str.replace(/\s/g, '').toLowerCase();
  for (const letter of str) {
    if (countObj[letter]) {
      countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  }
  return countObj;
} 

// Test case
const result1 = countLetters("Lighthouse labs in the house");
console.log(result1);
assertEqual(result1["l"], 2);
assertEqual(result1["h"], 4);
assertEqual(result1["a"], 1);