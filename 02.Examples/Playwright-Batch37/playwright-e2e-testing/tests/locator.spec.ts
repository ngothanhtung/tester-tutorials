import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

test('toBeChecked', async ({ page }) => {
  const locator = page.locator('#login-form_remember');
  await expect(locator).toBeChecked();
});

test('toHaveId', async ({ page }) => {
  const locator = page.getByPlaceholder('Nhập tên đăng nhập');
  await expect(locator).toHaveId('login-form_username');
});
