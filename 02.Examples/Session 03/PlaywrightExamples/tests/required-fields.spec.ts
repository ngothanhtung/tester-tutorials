import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// Testcase 1: Không nhập username, nhập password hợp lệ.
test('TC1 - Login: Không nhập username, nhập password hợp lệ', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');
  await expect(actualResult).toHaveText('Tên đăng nhập không được để trống');
});

// Testcase 2: Không nhập password, nhập username hợp lệ.
test('TC2 - Login: Không nhập password, nhập username hợp lệ', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('div.ant-form-item-explain-error');
  await expect(actualResult).toHaveText('Mật khẩu không được để trống');
});

// Testcase 3: Không nhập username, không nhập password.
test('TC3 - Login: Không nhập username, không nhập password', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult1 = await page.locator('div.ant-form-item-explain-error').first();
  await expect(actualResult1).toHaveText('Tên đăng nhập không được để trống');

  const actualResult2 = await page.locator('div.ant-form-item-explain-error').last();
  await expect(actualResult2).toHaveText('Mật khẩu không được để trống');
});
