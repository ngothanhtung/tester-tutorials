import { test, expect } from '@playwright/test';

test('Login thành công', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:
  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();
  // Kiểm tra login thành công thì go to home:
  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});

test('Login không thành công #1', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:
  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@124');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();
  // Kiểm tra login không thành công thì vẫn ở lại trang login:
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login không thành công #2', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:
  await page.locator('#login-form_username').fill('admix');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();
  // Kiểm tra login không thành công thì vẫn ở lại trang login:
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login không thành công #3', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:
  await page.locator('#login-form_username').fill('admix');
  await page.locator('#login-form_password').fill('Tester@124');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();
  // Kiểm tra login không thành công thì vẫn ở lại trang login:
  await expect(page).toHaveURL('https://aptech-tester.web.app/login');
});

test('Login: Kiểm tra username is required', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).toHaveText('Tên đăng nhập không được để trống');
});

test('Login: Kiểm tra password is required', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).toHaveText('Mật khẩu không được để trống');
});

test('Login: Kiểm tra username 3 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('adm');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra username 4 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admi');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra username 29 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('adminadminadminadminadminadmi');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra username 30 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('adminadminadminadminadminadmin');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra username 2 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('ad');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

test('Login: Kiểm tra username 31 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('adminadminadminadminadminadminx');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_username_help > div');
  await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

test('Login: Kiểm tra password 6 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra password 7 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra password 9 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@12');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra password 10 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@123');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).not.toBeVisible();
});

test('Login: Kiểm tra password 5 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Teste');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).toHaveText('Độ dài mật khẩu phải nằm trong khoảng 6 đến 10 ký tự');
});

test('Login: Kiểm tra password 11 characters', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  // Đi tìm 1 element:

  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('Tester@123x');

  // Click the login button
  await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

  // Di tìm element báo lỗi và kiểm tra
  await page.waitForTimeout(200);
  const actualResult = await page.locator('#login-form_password_help > div');
  await expect(actualResult).toHaveText('Độ dài mật khẩu phải nằm trong khoảng 6 đến 10 ký tự');
});
