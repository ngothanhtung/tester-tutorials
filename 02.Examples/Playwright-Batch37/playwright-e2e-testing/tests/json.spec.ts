import { test, expect } from '@playwright/test';

import records from './account.json';

test.beforeEach(async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
});

// Lặp qua từng dòng khi đọc được
let index = 0;
for (const record of records) {
  index++;

  const testcaseName = 'TC-LOGIN-CHECK: Check login result of account ' + index + ': ' + record.username + '/' + record.password;

  test(testcaseName, async ({ page }) => {
    // Click input[type="text"]
    await page.locator('input[type="text"]').click();
    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill(record.username);
    // Click input[type="password"]
    await page.locator('input[type="password"]').click();
    // Fill input[type="password"]
    await page.locator('input[type="password"]').fill(record.password);
    // Click button:has-text("Login")
    await page.locator('button:has-text("Đăng nhập")').click();

    await expect(page).toHaveURL('https://aptech-tester.web.app/home');
  });
}
