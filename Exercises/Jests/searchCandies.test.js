const searchCandies = require('../JS_files/searchCandies');

describe('given a prefix and max price', () => {
  it('returns matching candies', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  
  it('returns matching candies', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns matching candies', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns matching candies', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});

describe('given a prefix in lowercase and max price', () => {
  it('returns matching candies', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});

module.exports = searchCandies.test