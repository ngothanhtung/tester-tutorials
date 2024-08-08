import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://os-admin.aptech.io/login');
  // Viết code ...
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789');
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click();

  // Chờ cho đến khi chuyển trang
  await page.waitForURL('https://os-admin.aptech.io/dashboard');

  // Vào đúng đường dẫn
  await page.goto('https://os-admin.aptech.io/online-shop/data-management/categories');
});

test('TC1 - Thêm mới 1 category', async ({ page }) => {
  const name = 'Category Name 1111eww';
  const desc = 'Desc 1';

  await page.locator('#create-form_name').fill(name);
  await page.locator('#create-form_description').fill(desc);
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  await page.waitForTimeout(1000);

  const error = page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.card > div > div.ant-alert.ant-alert-error.ant-alert-with-description.css-d6xwx0');
  await expect(error).not.toBeVisible();

  const nameLocator = page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span');
  const descLocator = page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-d6xwx0 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span');

  await expect(nameLocator).toHaveText(name);
  await expect(descLocator).toHaveText(desc);
});
