import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('https://aptech-tester.web.app/login/v2');

  // Click button:has-text("Sign In")
  await page.locator('button:has-text("Sign In")').click();

  // Click div[role="alert"]:has-text("Username không được để trống")
  const message = page.locator('div[role="alert"]:has-text("Tên đăng nhập không được để trống")');
  await expect(message).toBeVisible();
});
