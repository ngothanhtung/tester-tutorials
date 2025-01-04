import { test, expect } from '@playwright/test';
// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  // Đảm bảo luôn login trước khi chạy testcase
  await page.goto('https://os-admin.aptech.io/login');
  // Thực hiện login
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click();

  await page.waitForURL('https://os-admin.aptech.io/dashboard');
  // Vào đúng đường dẫn
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/categories');
});

test('TC1 - Categories: Nhập mới thành công', async ({ page }) => {
  // Khai báo biến
  const name = 'Name 2222223';
  const description = 'Desc 2222223';

  await page.locator('#create-form_name').fill(name);
  await page.locator('#create-form_description').fill(description);

  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Đảm bảo không có lỗi
  await expect(page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.card > div > div.ant-alert.ant-alert-error.ant-alert-with-description.css-d6xwx0')).not.toBeVisible();

  // Chờ tầm 1s
  await page.waitForTimeout(1000);

  // Dòng đầu tiên
  const newName = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span').textContent();
  const newDescription = await page
    .locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span')
    .textContent();

  expect(name).toEqual(newName);
  expect(description).toEqual(newDescription);
});
