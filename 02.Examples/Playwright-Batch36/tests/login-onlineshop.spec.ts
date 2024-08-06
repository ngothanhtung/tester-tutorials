import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

test('TC2 - Login: Thành công ', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

test('TC3.1 - Login: Thất bại', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin1');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('TC3.2 - Login: Thất bại', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@122');

  // Click vào nút Đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('TC3.3 - Login: Thất bại', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin1');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@122');

  // Click vào nút Đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});
