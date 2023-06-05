const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
});

test.describe('Login: Result', () => {
  test('TC-LOGIN-SUCCESS: Login Success', async ({ page }) => {
    // Fill input[type="text"]
    await page.locator('#login-form_username').fill('admin');

    // Fill input[type="password"]
    await page.locator('#login-form_password').fill('Tester@123');
    // Click button:has-text("Login")
    await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

    await expect(page).toHaveURL('https://aptech-tester.web.app/home');
  });

  test('TC-LOGIN-FAILED: Login Failed', async ({ page }) => {
    // Click input[type="text"]
    await page.locator('input[type="text"]').click();
    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill('admin');
    // Click input[type="password"]
    await page.locator('input[type="password"]').click();
    // Fill input[type="password"]
    await page.locator('input[type="password"]').fill('Tester2029');
    // Click button:has-text("Login")
    await page.locator('button:has-text("Đăng nhập")').click();

    await expect(page).toHaveURL('https://aptech-tester.web.app/login');
  });
});

test.describe('Login: Fields is required', () => {
  test('TC-LOGIN-REQUIRED-USERNAME: Username is required', async ({ page }) => {
    await page.locator('#login-form_username').fill('');

    // Click button:has-text("Login")
    await page.locator('button:has-text("Đăng nhập")').click();

    const error = await page.locator('#login-form_username');
    // Kiểm tra tồn tại của class
    await expect(error).toHaveClass(/ant-input-status-error/);
  });

  test('TC-LOGIN-REQUIRED-PASSWORD: Password is required', async ({ page }) => {
    await page.locator('#login-form_username').fill('admin');
    await page.locator('#login-form_password').fill('');

    // Click button:has-text("Login")
    await page.locator('button:has-text("Login")').click();

    await page.waitForTimeout(1000);

    // Chụp màn hình
    // await page.screenshot({ path: './tests/screenshots/TC-LOGIN-REQUIRED-PASSWORD.png', clip: { x: 0, y: 0, height: 1080, width: 1920 } });

    // Case 1: Kiểm tra tồn tại của text
    // const error = await page.locator('text=Please input your password!');
    // await expect(error).toHaveCount(1);

    // Case 2: Kiểm tra theo class
    // const error = await page.locator('span.ant-input-password');
    // await expect(error).toHaveClass(/ant-input-affix-wrapper-status-error/);

    // Case 3: Kiểm tra theo ảnh chụp
    // Configure image matching threshold and snapshot name.
    expect(await page.screenshot({ clip: { x: 0, y: 0, height: 1080, width: 1920 } })).toMatchSnapshot({
      name: './tests/screenshots/TC-LOGIN-REQUIRED-PASSWORD.png',
    });
  });
});
