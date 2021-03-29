// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const assertionPassed = '😘 😘 😘 Assertion Passed: ' + actual + ' === ' + expected;
  const assertionFaied = '😰 😰 😰 Assertion failed: ' + actual + ' !== ' + expected;
  if (actual === expected) {
    console.log(assertionPassed);
  } else {
    console.log(assertionFaied);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1,2);
assertEqual(1, 1);