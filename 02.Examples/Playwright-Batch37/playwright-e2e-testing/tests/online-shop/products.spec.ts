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
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/products');
});

test('TC1 - Products: Nhập mới thành công', async ({ page }) => {
  // Khai báo biến

  const name = 'Name 2222223';
  const description = 'Desc 2222223';
  const price = '100';
  const discount = 10;
  const stock = 1000;

  await page.locator('.ant-select-selector').first().click();
  await page.getByTitle('123', { exact: true }).locator('div').click();
  await page.locator('div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').click();
  await page.getByTitle('A', { exact: true }).locator('div').click();
});
