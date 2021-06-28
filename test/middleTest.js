const assert = require('chai').assert;
const middle = require('../middle');

// // TEST CODE
// console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]));
// console.log(assertArrayEqual(middle([1, 2, 3, 9, 7, 9]), [3, 9]));
// console.log(assertArrayEqual(middle([4, 2]), []));
// console.log(assertArrayEqual(middle([4]), []));

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
  it("returns [3,9] for [1, 2, 3, 9, 7, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 9, 7, 9]), [3,9]); 
  });
  it("returns '[]' for [4,2]", () => {
    assert.deepEqual(middle([4,2]), []); 
  });
  it("returns '[]' for [4]", () => {
    assert.deepEqual(middle([4]), []); 
  });
});