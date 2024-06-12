import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// TEST SUITE
test.describe('Login', () => {
  // TEST CASE: LOGIN SUCCESSFULLY
  test('should login successfully', async ({ page }) => {
    // await page.getByPlaceholder('Nhập tên đăng nhập').fill('admin');
    await page.locator('#login-form_username').fill('admin');
    await page.locator('#login-form_password').fill('Tester@123');
    await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

    await expect(page).toHaveURL('https://aptech-tester.web.app/home');
  });
});
