import { test, expect } from '@playwright/test';

test('homepage has Aptech', async ({ page }) => {
  await page.goto('https://aptech-danang.edu.vn');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CNTT/);
});

test('homepage has Arena', async ({ page }) => {
  await page.goto('https://arena-danang.edu.vn');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Multimedia/);
});

test('Login - Failed', async ({ page }) => {
  // Go to https://ecommerce.aptech.io/
  await page.goto('https://ecommerce.aptech.io/');

  // Click text=Đăng nhập
  await page.locator('text=Đăng nhập').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/login?returnUrl=%2F');

  // Click input[name="Email"]
  await page.locator('input[name="Email"]').click();

  // Fill input[name="Email"]
  await page.locator('input[name="Email"]').fill('admin@aptech.io');

  // Press Tab
  await page.locator('input[name="Email"]').press('Tab');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('123456789');

  // Check input[type="checkbox"]
  await page.locator('input[type="checkbox"]').check();

  // Click button:has-text("Đăng nhập")
  await page.locator('button:has-text("Đăng nhập")').click();
  await expect(page).toHaveURL('https://ecommerce.aptech.io/login?returnurl=%2F');
});
