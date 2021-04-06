const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("given an empty array, return empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("given an array of one element, return empty array", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });
});