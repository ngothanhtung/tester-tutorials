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
    await page.locator('button:has-text("Đăng nhập")').click();
    const error = page.locator('#login-form > div:nth-child(1) > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

    await expect(error).toHaveText('Tên đăng nhập không được để trống');
  });

  test('TC-LOGIN-REQUIRED-PASSWORD', async ({ page }) => {
    await page.locator('#login-form_password').fill('');
    await page.locator('button:has-text("Đăng nhập")').click();
    const error = page.locator('#login-form > div:nth-child(2) > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');

    await expect(error).toHaveText('Mật khẩu không được để trống');
  });
});
