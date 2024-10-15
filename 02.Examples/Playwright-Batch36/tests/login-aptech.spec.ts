import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/lifecycle/login/app');
});

test('TC1 - Login thành công ', async ({ page }) => {
  // Viết code ...
  await page.locator('#login-form_username').fill('tungnt@softech.vn');
  await page.locator('#login-form_password').fill('123456789');
  await page.locator('#login-form > div:nth-child(3) > div > div > div > div > button').click();

  await page.waitForTimeout(3000);

  await expect(page).toHaveURL('https://aptech-tester.web.app/home');
});
