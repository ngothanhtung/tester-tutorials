import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 2 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('ad');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 31 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('a123456789a123456789a123456789z');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 3 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('abc');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 30 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('a123456789a123456789a123456789');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 29 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('a123456789a123456789a12345678');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});

// Testcase 1: Tên đăng nhập >= 3 và <= 30 ký tự
test('TC1 - Login: Tên đăng nhập >= 3 và <= 30 ký tự: 4 ký tự', async ({ page }) => {
  // Điền tên đăng nhập
  await page.locator('#login-form_username').fill('abcd');
  // Điền mật khẩu
  await page.locator('#login-form_password').fill('Tester@123');

  // Click vào nút Đăng nhập
  await page.locator('button:has-text("Đăng nhập")').click();

  await page.waitForTimeout(500);

  // Kiểm tra thông báo lỗi
  const actualResult = await page.locator('#login-form > div.ant-row.ant-form-item.ant-form-item-with-help.ant-form-item-has-error > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

  // Có xuất hiện thông báo lỗi
  await expect(actualResult).not.toBeInViewport();
  // await expect(actualResult).toHaveText('Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự');
});
