// import from the sum.js file
const sum = require('../src/sum');

describe('math', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 5 + 9 to equal 14', () => {
    expect(sum(5, 9)).toBe(14);
  });

  test('adds 10 + (-5) to equal 5', () => {
    expect(sum(10, -5)).toBe(5);
  });
});
