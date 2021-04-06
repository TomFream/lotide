const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns empty array when given one element", () => {
    actual = [1];
    expected = [];
    assert.deepEqual(middle(actual), expected);
  });
  it("returns empty array when given two elements", () => {
    actual = [1, 2];
    expected = [];
    assert.deepEqual(middle(actual), expected);
  });
  it("returns middle element when given odd numbered array", () => {
    actual = [1, 2, 3];
    expected = [2];
    assert.deepEqual(middle(actual), expected);
  });
  it("returns middle two elements when given even numbered array", () => {
    actual = [1, 2, 3, 4];
    expected = [2, 3];
    assert.deepEqual(middle(actual), expected);
  });
});