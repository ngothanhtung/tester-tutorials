import { test, expect } from '@playwright/test';

test('page', async ({ page }) => {
  // page.goto: Load a web page
  await page.goto('https://aptech-tester.web.app/login');

  // Get by
  //await page.getByLabel('Tên đăng nhập').fill('admin1234');

  // await page.getByPlaceholder('Nhập tên đăng nhập').fill('admin12345');

  // await page.getByText('Xây dựng mẫu kiểm thử cho form Login sau:').highlight();
  // await page.getByTitle('Tên đăng nhập').highlight();

  // await page.getAttribute('type', 'password');

  await page.getByTestId('ticket-form-fullname').fill('Ngô Thanh Tùng');

  await page.locator('#root > div > div > div > main > div > ul:nth-child(9) > li:nth-child(2)').highlight();

  page.waitForTimeout(1000);

  page.waitForURL('https://aptech-tester.web.app/login');

  page.waitForSelector('#login-form_username');
});
