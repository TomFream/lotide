const countLetter = function(str) {
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
};

module.exports = countLetter;

// // Test case
// const result1 = countLetters("Lighthouse labs in the house");
// console.log(result1);
// console.log(assertEqual(result1["l"], 2));
// console.log(assertEqual(result1["h"], 4));
// console.log(assertEqual(result1["a"], 1));