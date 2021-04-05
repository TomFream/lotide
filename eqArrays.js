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

module.exports = eqArrays;