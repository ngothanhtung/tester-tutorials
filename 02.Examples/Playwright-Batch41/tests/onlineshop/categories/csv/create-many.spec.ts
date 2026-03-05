import { test, expect, Page } from '@playwright/test';

import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Đọc file csv
const records = parse(fs.readFileSync(path.join(__dirname, 'data.csv'), 'utf-8'), {
  columns: true, // Tự động đọc header
  delimiter: ',', // Dấu phân cách
  skip_empty_lines: true, // Bỏ qua dòng trống
  trim: true, // Loại bỏ khoảng trắng thừa
  bom: true, // Xử lý UTF-8 BOM
}) as any[];

test.describe('Create Categories from CSV', () => {
  let sharedPage: Page;

  // Cải tiến: Chỉ cần login 1 lần trước tất cả test case, không cần login trước mỗi test case
  // Dùng browser fixture vì page/context không được phép trong beforeAll
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    sharedPage = await context.newPage();

    // Go to:
    await sharedPage.goto('https://os-admin.vercel.app/login');

    // Điền thông tin đăng nhập bằng locator
    await sharedPage.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn');
    await sharedPage.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789');

    // Click vào nút đăng nhập
    await sharedPage.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click();

    // Chờ điều hướng và kiểm tra URL
    await sharedPage.waitForURL('https://os-admin.vercel.app/dashboard');

    await sharedPage.goto('https://os-admin.vercel.app/online-shop/data-management/categories');
  });

  test.afterAll(async () => {
    await sharedPage.close();
  });

  // Không cho chạy song song để tránh xung đột dữ liệu
  test.describe.configure({ mode: 'serial' });

  let index = 0;
  // Vòng lặp để duyệt qua từng dòng dữ liệu trong file csv
  for (const record of records) {
    index += 1;
    test('Thêm mới: ' + record.name, async () => {
      const page = sharedPage;
      const name = record.name;
      const description = record.description;
      // Test steps:
      await page.locator('#create-form_name').fill(name);
      await page.locator('#create-form_description').fill(description);

      // Lưu trữ data cũ để xác thực
      const old_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

      // Click nút Save
      await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

      // Chờ tầm 1s
      await page.waitForTimeout(500);

      // Lưu trữ data cũ để xác thực
      const new_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

      const new_name = await page
        .locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')
        .textContent();

      const new_description = await page
        .locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span')
        .textContent();
      // Thực thiện các assertions
      expect(new_name).toEqual(name); // Kiểm tra tên mới thêm
      expect(new_description).toEqual(description); // Kiểm tra mô tả mới thêm
      expect(new_id).not.toEqual(old_id); // Kiểm tra id mới khác id cũ
    });
  }
});
