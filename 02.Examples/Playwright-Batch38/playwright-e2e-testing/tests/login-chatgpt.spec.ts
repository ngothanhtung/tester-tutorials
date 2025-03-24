import { test, expect } from '@playwright/test';

test('Login test using locator', async ({ page }) => {
  // Điều hướng đến trang đăng nhập
  await page.goto('https://aptech-tester.web.app/login');

  // Điền thông tin đăng nhập bằng locator
  await page.locator('#login-form_username').fill('admin'); // Thay X1 bằng selector thực tế
  await page.locator('#login-form_password').fill('Tester@123'); // Thay X2 bằng selector thực tế

  // Click vào nút đăng nhập
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click(); // Thay X3 bằng selector thực tế

  // Chờ điều hướng và kiểm tra URL
  await page.waitForURL('https://aptech-tester.web.app/home');

  // Kiểm tra URL hiện tại
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

test('Login with incorrect username and correct password', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  await page.locator('#login-form_username').fill('admix'); // Sai username
  await page.locator('#login-form_password').fill('Tester@123'); // Đúng password

  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Kiểm tra URL vẫn là trang login
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login with correct username and incorrect password', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  await page.locator('#login-form_username').fill('admin'); // Đúng username
  await page.locator('#login-form_password').fill('Tester@124'); // Sai password

  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Kiểm tra URL vẫn là trang login
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login with incorrect username and incorrect password', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  await page.locator('#login-form_username').fill('admix'); // Sai username
  await page.locator('#login-form_password').fill('Tester@124'); // Sai password

  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Kiểm tra URL vẫn là trang login
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});
