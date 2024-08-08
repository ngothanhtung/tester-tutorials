import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Get by test id
  const locator = page.getByTestId('color');

  // Get by id
  const locator2 = page.locator('[id="next"]');

  // Get by role
  const locator3 = page.getByRole('button');

  const locator4 = page.getByText('button');
  const locator5 = page.getByLabel('username');
  const locator6 = page.getByAltText('picture');
  const locator7 = page.getByPlaceholder('Please enter your name');
  const locator8 = page.getByTitle('Aptech Việt Nam');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
