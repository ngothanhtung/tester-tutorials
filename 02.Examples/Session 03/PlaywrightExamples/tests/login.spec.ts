import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// Testcase 1: Đăng nhập thành công với tài khoản đúng thông tin
test('TC1 - Login: Thành công ', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

// Testcase 2: Đăng nhập không thành công với tài khoản sai thông tin
test('TC1 - Login: Không thành công', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('wrong-username');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  // Kiểm tra URL sau khi đăng nhập không thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});
