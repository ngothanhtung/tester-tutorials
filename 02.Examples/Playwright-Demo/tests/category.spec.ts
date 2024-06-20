import { test, expect } from '@playwright/test';

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
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/categories');
});

test('Add new category: thành công', async ({ page }) => {
  const name = 'New Category 123456789';
  const desc = 'Description 123456789';
  await page.locator('#create-form_name').fill(name);
  await page.locator('#create-form_description').fill(desc);
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  const error = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.card > div > div.ant-alert.ant-alert-error.ant-alert-with-description.css-d6xwx0');
  await expect(error).not.toBeVisible();

  const new_name = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span');
  const new_desc = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span');

  await expect(new_name).toHaveText(name);
  await expect(new_desc).toHaveText(desc);
});
