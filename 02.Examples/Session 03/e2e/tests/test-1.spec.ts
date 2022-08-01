import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://ecommerce.aptech.io/
  await page.goto('https://ecommerce.aptech.io/');

  await page.selectOption('#customerlanguage', 'http://ecommerce.aptech.io/changelanguage/1?returnUrl=%2F');
  // Click text=Log in
  await page.locator('text=Log in').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/login?returnUrl=%2F');

  // Fill input[name="Email"]
  await page.locator('input[name="Email"]').fill('admin@aptech.io');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('147258369');

  // Check input[type="checkbox"]
  await page.locator('input[type="checkbox"]').check();

  // Click button:has-text("Log in")
  await page.locator('button:has-text("Log in")').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/');
});
