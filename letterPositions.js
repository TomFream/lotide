// const assertArraysEqual = function(actualArray, expectedArray) {
//   const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actualArray} === ${expectedArray}`;
//   const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actualArray} !== ${expectedArray}`;
  
//   if (actualArray.length !== expectedArray.length) {
//     console.log(assertionFaied);
//   }
//   for (const index in actualArray) {
//     if (actualArray[index] !== expectedArray[index]) {
//       console.log(assertionFaied);
//     }
//   }
//   console.log(assertionPassed);
// };

const letterPositions = function(str) {
  const results = {};
  str = str.replace(/\s/g, '').toLowerCase();
  for (const index in str) {
    if (results[str[index]]) {
      results[str[index]].push(Number(index));
    } else {
      results[str[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;

// // Test case
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("Lighthouse labs in the house").l, [0, 10]);
// assertArraysEqual(letterPositions("Lighthouse labs in the house").h, [3, 5, 17, 19]);
// assertArraysEqual(letterPositions("Lighthouse labs in the house").a, [11]);

