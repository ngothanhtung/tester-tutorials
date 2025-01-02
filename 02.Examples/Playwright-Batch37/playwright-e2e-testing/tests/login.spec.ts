import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

test('Login thành công', async ({ page }) => {
  // username đúng, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút login
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000);

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

test('Login thất bại #1', async ({ page }) => {
  // username đúng, password sai
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@122');

  // Click vào nút login
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000);

  // Kiểm tra URL sau khi đăng nhập không thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login thất bại #2', async ({ page }) => {
  // username sai, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admim');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút login
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000);

  // Kiểm tra URL sau khi đăng nhập không thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login thất bại #3', async ({ page }) => {
  // username sai, password sai
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admim');

  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@122');

  // Click vào nút login
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000);

  // Kiểm tra URL sau khi đăng nhập không thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});
