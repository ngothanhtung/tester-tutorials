import { test, expect } from '@playwright/test';

test('Ecommerce - Login', async ({ page }) => {
  // Go to https://ecommerce.aptech.io/
  await page.goto('https://ecommerce.aptech.io/');

  // Click text=Đăng nhập
  await page.locator('text=Đăng nhập').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/login?returnUrl=%2F');

  // Fill input[name="Email"]
  await page.locator('input[name="Email"]').fill('admin@aptech.io');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('147258369');

  // Check input[type="checkbox"]
  await page.locator('input[type="checkbox"]').check();

  // Click button:has-text("Đăng nhập")
  await page.locator('button:has-text("Đăng nhập")').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/');
});
