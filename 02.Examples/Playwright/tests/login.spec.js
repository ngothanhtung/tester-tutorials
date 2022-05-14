const { test, expect } = require('@playwright/test');

test('TC-ID-1: Login Success', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
  // Click input[type="text"]
  await page.locator('input[type="text"]').click();
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('admin');
  // Click input[type="password"]
  await page.locator('input[type="password"]').click();
  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('Tester2022');
  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  await expect(page).toHaveURL('https://aptech-tester.web.app');
});
