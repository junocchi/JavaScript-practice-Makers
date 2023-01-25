const add = require('../JS_files/add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  it('adds 2 and 2', () => {
    expect(add(2, 2)).not.toBe(5);
  });
});

module.exports = add.test