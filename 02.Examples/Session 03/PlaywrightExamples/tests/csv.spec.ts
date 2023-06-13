// Tại của sổ terminal cài thư viện csv-parse: npm install csv-parse --save

const { test, expect } = require('@playwright/test');

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Đọc file csv
const records = parse(fs.readFileSync(path.join(__dirname, 'accounts.csv')), {
  columns: true, // Tự động đọc header
  delimiter: ',', // Dấu phân cách
  skip_empty_lines: true, // Bỏ qua dòng trống
});

test.beforeEach(async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
});

// Lặp qua từng dòng khi đọc được
let index = 0;
for (const record of records) {
  index++;

  const testName = 'TC-LOGIN-CHECK: Check login result of account ' + index + ': ' + record.username + '/' + record.password;
  test(testName, async ({ page }) => {
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
