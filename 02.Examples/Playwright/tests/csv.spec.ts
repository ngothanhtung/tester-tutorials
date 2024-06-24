// Tại của sổ termial cài thư viện csv-parse: npm install csv-parse
import { test, expect } from '@playwright/test';
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Đọc file csv
const records = parse(fs.readFileSync(path.join(__dirname, 'accounts.csv')), {
  columns: true,
  skip_empty_lines: true,
});

test.beforeEach(async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
});

// Lặp qua từng dòng khi đọc được
for (const record of records) {
  test('TC-LOGIN-CHECK: Check login result with account: ' + record.username, async ({ page }) => {
    // Click input[type="text"]
    await page.locator('input[type="text"]').click();
    // Fill input[type="text"]
    await page.locator('input[type="text"]').fill(record.username);
    // Click input[type="password"]
    await page.locator('input[type="password"]').click();
    // Fill input[type="password"]
    await page.locator('input[type="password"]').fill(record.password);
    // Click button:has-text("Login")
    await page.locator('button:has-text("Login")').click();

    await expect(page).toHaveURL('https://aptech-tester.web.app');
  });
}
