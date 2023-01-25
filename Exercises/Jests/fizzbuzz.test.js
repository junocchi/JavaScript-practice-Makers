const fizzbuzz = require('../JS_files/fizzbuzz');

describe('returns Fizz, Buzz, Fizzbuzz or num', () => {
  it('returns Fizzbuzz if num is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
  
  it('returns Fizz if num is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it('returns Buzz if num is divisible by 5', () => {
    expect(fizzbuzz(10)).toMatch("Buzz");
  });

  it('returns num if num is not divisible by 3 or 5', () => {
    expect(fizzbuzz(7)).toBe(7);
  });
});

module.exports = fizzbuzz.test