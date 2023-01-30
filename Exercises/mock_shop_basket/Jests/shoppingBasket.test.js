const ShoppingBasket = require('../JS_files/shoppingBasket');
const Candy = require('../JS_files/candy');

jest.mock/('../JS_files/shoppingBasket');

describe('shoppingBasket', () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    Candy.mockClear();
  });

//describe('given an item and price', () => {
  it('returns the shopping baskets items and prices', () => {
    let mockCandy = new Candy();
    mockCandy.mockImplementation(() => 'Skittle', 3.99);
    let result = new ShoppingBasket(mockCandy)
    expect(result.getTotalPrice).toEqual(3.99);
  });
});  

module.exports = ShoppingBasket.test;