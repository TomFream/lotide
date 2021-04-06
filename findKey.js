const findKey = function(object, callback) {
  const objKeys = Object.keys(object);
  for (let key of objKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// // Test cases
// console.log(assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma")); // => "noma"