const assertEqual = function(actual, expected) {
  const assertionPassed = `😘 😘 😘 Assertion Passed: ${actual} === ${expected}`;
  const assertionFaied = `😰 😰 😰 Assertion failed: ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(assertionPassed);
  } else {
    console.log(assertionFaied);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const returnObj = {};
  for (const item of allItems) {
    if (item in returnObj && itemsToCount[item] == true){
      returnObj[item] += 1;
    } else if (itemsToCount[item] == true) {
      returnObj[item] = 1;
    }
  }
  return returnObj;
};

// Test case
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);