// // Assert functions
// const eqArrays = function(firstArray, secondArray) {
//   if (firstArray.length !== secondArray.length) {
//     return false;
//   }
//   for (const index in firstArray) {
//     if (firstArray[index] !== secondArray[index]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(actual, expected) {
//   const assertionPassed = `😘 😘 😘 Array Assertion Passed: ${actual} === ${expected}`;
//   const assertionFaied = `😰 😰 😰 Array Assertion failed: ${actual} !== ${expected}`;
  
//   if (eqArrays(actual, expected)) {
//     return  assertionPassed;
//   }
//   return assertionFaied;
// };

// takeUntil function implementation
const takeUntil = function(array, callback) {
  const returnArr = [];
  for (const element of array)
    if (!callback(element)) {
      returnArr.push(element);
    } else break;
  return returnArr;
};

module.exports = takeUntil;

// // Test cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);