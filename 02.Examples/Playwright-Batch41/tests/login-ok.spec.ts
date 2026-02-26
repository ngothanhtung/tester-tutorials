import { test, expect } from '@playwright/test';

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Đọc file csv
const records = parse(fs.readFileSync(path.join(__dirname, 'accounts.csv'), 'utf-8'), {
  columns: true, // Tự động đọc header
  delimiter: ',', // Dấu phân cách
  skip_empty_lines: true, // Bỏ qua dòng trống
  // trim: true, // Loại bỏ khoảng trắng thừa
  // bom: true, // Xử lý UTF-8 BOM
}) as any[];

test.beforeEach(async ({ page }) => {
  // Go to https://aptech-tester.web.app/login
  await page.goto('https://aptech-tester.web.app/login');
});

let index = 0;
for (const record of records) {
  index += 1;
  // Tạo test case cho từng dòng dữ liệu
  test('Login thành công: ' + record.username, async ({ page }) => {
    await page.goto('https://aptech-tester.web.app/login');

    await page.locator('#login-form_username').fill(record.username);
    await page.locator('#login-form_password').fill(record.password);

    await page.locator('#login-form > div:nth-child(4) > div > div > div > div > button').click();

    // Wait for 500ms
    await page.waitForTimeout(500);
    await expect(page).toHaveURL('https://aptech-tester.web.app/home');
  });
}
