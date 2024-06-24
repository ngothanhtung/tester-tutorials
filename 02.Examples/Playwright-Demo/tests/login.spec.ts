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

test('TC2 - Screenshot Capture', async ({ page }) => {
  await page.locator('#login-form_username').fill('admin');
  await page.screenshot({ path: './tests/screen-shots/TC2-1.png', clip: { x: 0, y: 0, height: 1080, width: 1920 } });
  await page.locator('#login-form_password').fill('Tester@123');
  await page.locator('button:has-text("Đăng nhập")').click();
  await page.waitForTimeout(500);

  // Chụp màn hình để lưu giữ lại
  await page.screenshot({ path: './tests/screen-shots/TC2-2.png', clip: { x: 0, y: 0, height: 1080, width: 1920 } });
});

test('TC3: Screenshot Compare', async ({ page }) => {
  await page.locator('#login-form_username').fill('admin');
  await page.locator('#login-form_password').fill('');
  await page.locator('button:has-text("Đăng nhập")').click();
  await page.waitForTimeout(500);

  // Kiểm tra theo ảnh chụp
  // So sánh ảnh chụp với ảnh đã lưu trước đó
  const screenshot = await page.screenshot({ clip: { x: 0, y: 0, height: 1080, width: 1920 } });
  await page.waitForTimeout(1000);
  // Kiểm tra ảnh chụp có khớp với ảnh đã lưu trước đó không?
  expect(screenshot).toMatchSnapshot({
    name: './tests/screen-shots/TC2-1.png',
  });
});
