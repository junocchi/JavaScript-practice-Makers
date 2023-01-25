const multiply = require('../JS_files/multiply');

describe('multiplies', () => {
  it('multiplies 2 by 5', () => {
    expect(multiply(2, 5)).toBe(10);
  });

  it('multiplies 3 by 7', () => {
    expect(multiply(3, 7)).not.toBe(20);
  });
});

module.exports = multiply.test