import { test, expect } from '@playwright/test';
import fs from 'fs';

import path from 'path';
import { parse } from 'csv-parse/sync';

// Đọc file csv, có bao nhiêu dòng thì sẽ chạy bấy nhiêu test case
const records = parse(fs.readFileSync(path.join(__dirname, 'products.csv')), {
  columns: true, // Tự động đọc header
  delimiter: ',', // Dấu phân cách
  skip_empty_lines: true, // Bỏ qua dòng trống
});

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  // Đảm bảo luôn login trước khi chạy testcase
  await page.goto('https://os-admin.aptech.io/login');

  // Thực hiện login
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click();

  // Chờ cho đến khi chuyển trang
  await page.waitForURL('https://os-admin.aptech.io/dashboard');

  // Vào đúng đường dẫn
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/products');
});
// Lặp qua từng dòng khi đọc được
let index = 0;
for (const record of records) {
  index = index + 1;

  const testcaseName = 'TC-NEW-PRODUCT' + index + ': ' + record.name + ' / ' + record.price;

  test(testcaseName, async ({ page }) => {
    // Create new products
    const name = record.name;
    const price = record.price;
    const discount = record.discount;
    const stock = record.stock;
    const category_id = record.category_id;
    const supplier_id = record.supplier_id;
    const description = '...';
    // Viết
  });
}
