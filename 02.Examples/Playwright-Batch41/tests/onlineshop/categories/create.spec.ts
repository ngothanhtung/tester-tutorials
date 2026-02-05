import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  // ...
  // Go to:
  await page.goto('https://os-admin.vercel.app/login');

  // Điền thông tin đăng nhập bằng locator
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789');

  // Click vào nút đăng nhập
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click();

  // Chờ điều hướng và kiểm tra URL
  await page.waitForURL('https://os-admin.vercel.app/dashboard');

  await page.goto('https://os-admin.vercel.app/online-shop/data-management/categories');
});

test('Thêm mới', async ({ page }) => {
  const name = 'Danh mục tự động 02';
  const description = 'Mô tả danh mục tự động 02';
  // Test steps:
  await page.locator('#create-form_name').fill(name);
  await page.locator('#create-form_description').fill(description);

  // Lưu trữ data cũ để xác thực
  const old_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 1s
  await page.waitForTimeout(1000);

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
