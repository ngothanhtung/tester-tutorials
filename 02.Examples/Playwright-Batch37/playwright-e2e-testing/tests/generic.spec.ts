import { test, expect } from '@playwright/test';

test('arrayContaining', async ({ page }) => {
  expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1, 2]));

  expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 4]));
});

test('closeTo', async ({ page }) => {
  expect({ prop: 0.1 + 0.2 }).not.toEqual({ prop: 0.3 });

  expect({ prop: 0.1 + 0.2 }).toEqual({ prop: expect.closeTo(0.3, 5) });
});

test('stringMatching', async ({ page }) => {
  // Regular expression

  // Regular Expression: 10 numbers, the first 3 numbers must 090, 091, 092, 098
  expect('0906234567').toEqual(expect.stringMatching(/09[0-2,8]\d{7}/));

  expect('1254543ms').toEqual(expect.stringMatching(/\d+m?s/));
});
