const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// // Test cases
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'], "\n"));

// const nums = [20, 5, 15, 100];
// const results2 = map(nums, num => num * 2);
// console.log(assertArraysEqual(results2, [40, 10, 30, 200], "\n"));

// const strs = ["scout", "fido", "charles", "doug"];
// const results3 = map(strs, dog => `Give ${dog} a treat`);
// console.log(assertArraysEqual(results3, ["Give scout a treat", "Give fido a treat", "Give charles a treat", "Give doug a treat"], "\n"));

