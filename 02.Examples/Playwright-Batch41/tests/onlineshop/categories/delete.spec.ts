import { test, expect } from '@playwright/test';

// Chạy trước mỗi test bên dưới (Pre-condition)
// Login vào hệ thống trước khi chạy các test bên dưới
test.beforeEach(async ({ page }) => {
  // Điều hướng đến trang đăng nhập
  await page.goto('https://os-admin.vercel.app/login');

  // Điền thông tin đăng nhập bằng locator
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn'); // Thay X1 bằng selector thực tế
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789'); // Thay X2 bằng selector thực tế

  // Click vào nút đăng nhập
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click(); // Thay X3 bằng selector thực tế

  // Chờ điều hướng và kiểm tra URL
  await page.waitForURL('https://os-admin.vercel.app/dashboard');

  await page.goto('https://os-admin.vercel.app/online-shop/data-management/categories');
});

test('Delete a category must be successful', async ({ page }) => {
  // Chờ tầm 0,5s để dữ liệu tải về
  await page.waitForTimeout(500);
  // Lưu trữ data cũ để xác thực
  const old_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

  // Click vào nút Delete
  await page.getByRole('button', { name: 'delete' }).first().click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  // Chờ tầm 1s
  await page.waitForTimeout(1000);

  // Test expect:
  // Kiểm dữ liệu đã được tạo thành công
  const new_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();
  expect(new_id).not.toEqual(old_id); // Kiểm tra id mới khác id cũ
});
