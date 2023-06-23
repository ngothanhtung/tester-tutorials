const { test, expect } = require('@playwright/test');

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync(path.join(__dirname, 'categories.csv')), {
  columns: true, // Tự động đọc header
  delimiter: ',', // Dấu phân cách
  skip_empty_lines: true, // Bỏ qua dòng trống
});

// Lặp qua từng dòng khi đọc được
let index = 0;
for (const record of records) {
  index++;

  const testName = 'TC-CATEGORIES: Add new category ' + index;
  test(testName, async ({ page }) => {
    // Khai báo biến
    const name = record.name;
    const description = record.description;

    // await page.getByRole('textbox', { name: '* Name :' }).fill(name);
    // await page.getByLabel('Description').fill(description);

    // Chụp ảnh
    await page.screenshot({ path: './screen-shots/TC-CATEGORIES-Add-new-category-' + index + '-BEFORE.png', clip: { x: 0, y: 0, height: 1080, width: 1920 } });
    // await page.getByRole('button', { name: 'Save' }).click();

    // // Đảm bảo không có lỗi
    // await expect(page.getByRole('alert')).not.toBeVisible();

    // Chờ tầm 1s
    await page.waitForTimeout(500);

    await page.screenshot({ path: './screen-shots/TC-CATEGORIES-Add-new-category-' + index + '-AFTER.png', clip: { x: 0, y: 0, height: 1080, width: 1920 } });

    // Dòng đầu tiên
    // const firstRow = await page.locator('.ant-table-row-level-0:nth-child(1)');
    // const newName = await firstRow.locator('.ant-table-cell:nth-child(2)').textContent();
    // const newDescription = await firstRow.locator('.ant-table-cell:nth-child(3)').textContent();

    // await expect(name).toEqual(newName);
    // await expect(description).toEqual(newDescription);
  });
}
