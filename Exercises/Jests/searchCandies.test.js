const searchCandies = require('../JS_files/searchCandies');

describe('given a prefix and max price', () => {
  it('returns prefix matching candies less than max price', () => {
    expect(searchCandies('Ma', 10)).toBe([ 'Mars', 'Maltesers' ]);
    expect(searchCandies('Ma', 2)).toBe([ 'Mars' ]);
    expect(searchCandies('ma', 2)).toBe([ 'Mars' ]);
    expect(searchCandies('S', 10)).toBe([ 'Skitties', 'Skittles', 'Starburst' ]);
    expect(searchCandies('S', 4)).toBe([ 'Skitties', 'Skittles' ]);
  });

module.exports = searchCandies.test;

// const candies = [
//   { name: 'Aero', price: 1.99 },
//   { name: 'Skitties', price: 2.99 },
//   { name: 'Mars', price: 1.49 },
//   { name: 'Maltesers', price: 3.49 },
//   { name: 'Skittles', price: 1.49 },
//   { name: 'Starburst', price: 5.99 },
//   { name: 'Ricola', price: 1.99 },
//   { name: 'Polkagris', price: 5.99 },
//   { name: 'Pastila', price: 4.99 },
//   { name: 'Mentos', price: 8.99 },
//   { name: 'Raffaello', price: 7.99 },
//   { name: 'Gummi bears', price: 10.99 },
//   { name: 'Fraise Tagada', price: 5.99 }
// ];