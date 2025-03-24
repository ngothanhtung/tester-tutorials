import { test, expect } from '@playwright/test';

test('login thành công', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  // username đúng, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000); // 1000ms = 1s

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

test('login thất bại: Username sai, Password đúng', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  // username đúng, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('adminx');

  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000); // 1000ms = 1s

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('login thất bại: Username đúng, Password sai', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  // username đúng, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('admin');

  await page.locator('#login-form_password').fill('Tester@124');

  // Click vào nút đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000); // 1000ms = 1s

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('login thất bại: Username sai, Password sai', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  // username đúng, password đúng
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('adminx');

  await page.locator('#login-form_password').fill('Tester@124');

  // Click vào nút đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Chờ 1s để trang web load dữ liệu
  await page.waitForTimeout(1000); // 1000ms = 1s

  // Kiểm tra URL sau khi đăng nhập thành công
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});
