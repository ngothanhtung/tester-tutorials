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

test('TC2.1 - Login: Không thành công #1', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@124');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('TC2.2 - Login: Không thành công #2', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admim');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('TC2.3 - Login: Không thành công #3', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admim');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@124');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('TC2 - Login: Tên đăng nhập = 3 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('adm');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  const actualResult = await page.locator('#login-form_username_help > div');

  // Không xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
});
