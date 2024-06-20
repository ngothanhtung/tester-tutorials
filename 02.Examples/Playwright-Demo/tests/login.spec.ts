import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

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
