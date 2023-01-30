let candy = require('../JS_files/candy');

describe('given an item and price', () => {
  it('returns the item and price', () => {
    result = new candy('Mars', 1.49);
    expect(result).toEqual({"item": "Mars", "price": 1.49});
  });
});  

module.exports = candy.test