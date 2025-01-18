import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
});

test.describe('Login', () => {
  test('TC-LOGIN-SUCCESS: Login Success', async ({ page }) => {
    await page.locator('input[type="text"]').fill('admin');
    await page.locator('input[type="password"]').fill('Tester@123');
    await page.locator('button:has-text("Đăng nhập")').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://aptech-tester.web.app/home');
  });

  test('TC-LOGIN-FAILED: Wrong password', async ({ page }) => {
    await page.locator('input[type="text"]').fill('admin');
    await page.locator('input[type="password"]').fill('Tester@321');
    await page.locator('button:has-text("Đăng nhập")').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://aptech-tester.web.app/login');
  });

  test('TC-LOGIN-FAILED: Wrong username', async ({ page }) => {
    await page.locator('input[type="text"]').fill('admin1');
    await page.locator('input[type="password"]').fill('Tester@123');
    await page.locator('button:has-text("Đăng nhập")').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://aptech-tester.web.app/login');
  });

  test('TC-LOGIN-FAILED: Wrong username and password', async ({ page }) => {
    await page.locator('input[type="text"]').fill('admin1');
    await page.locator('input[type="password"]').fill('Tester@123');
    await page.locator('button:has-text("Đăng nhập")').click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL('https://aptech-tester.web.app/login');
  });
});

test.describe('Login: Fields is required', () => {
  test('TC-LOGIN-REQUIRED-USERNAME', async ({ page }) => {
    await page.locator('#login-form_username').fill('');
    await page.locator('#login-form_password').fill('Tester@123');
    await page.locator('button:has-text("Đăng nhập")').click();
    const error = page.locator('#login-form_username_help > div');

    await page.waitForTimeout(500);
    await expect(error).toHaveText('Tên đăng nhập không được để trống');
  });

  test('TC-LOGIN-REQUIRED-PASSWORD', async ({ page }) => {
    await page.locator('#login-form_username').fill('admin');
    await page.locator('#login-form_password').fill('');
    await page.locator('button:has-text("Đăng nhập")').click();
    const error = page.locator('#login-form_password_help > div');

    await expect(error).toHaveText('Mật khẩu không được để trống');
  });
});
