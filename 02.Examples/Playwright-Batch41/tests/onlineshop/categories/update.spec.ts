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

test('Update a category must be successful', async ({ page }) => {
  // Chờ cho lấy data dc
  await page.waitForTimeout(1000);
  // Lưu trữ data cũ để xác thực
  const old_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

  // Test data:
  const name = 'Category 123456 X1';
  const description = 'Desc Category 123456 X1';

  // Click nut edit tại dòng đầu tiên
  await page.getByRole('button', { name: 'edit' }).first().click();

  // Chờ tầm 0,2s để cửa sổ edit mở ra
  await page.waitForTimeout(500);

  // Open cửa sổ edit
  await page.locator('#update-form_name').fill(name);
  await page.locator('#update-form_description').fill(description);

  // Click nút Save

  // await page.locator('body > div:nth-child(7) > div > div.ant-modal-wrap.ant-modal-centered > div > div:nth-child(1) > div > div.ant-modal-footer > button.ant-btn.css-15vjyw2.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid').click();
  await page.locator('body > div:nth-child(5) > div > div.ant-modal-wrap.ant-modal-centered > div > div:nth-child(1) > div > div.ant-modal-footer > button.ant-btn.css-15vjyw2.ant-btn-primary.ant-btn-color-primary.ant-btn-variant-solid').click();
  // Chờ tầm 1s
  await page.waitForTimeout(1000);

  // Kiểm dữ liệu đã được tạo thành công
  const new_id = await page.locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)').textContent();

  const new_name = await page
    .locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')
    .textContent();
  const new_description = await page
    .locator('#layout-wrapper > div.main-content > div > div > div > div:nth-child(2) > div > div.ant-table-wrapper.css-15vjyw2 > div > div > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > span')
    .textContent();

  expect(new_id).toEqual(old_id); // Kiểm tra id mới trùng id cũ vì không thay đổi
  expect(new_name).toEqual(name); // Kiểm tra name mới đúng với name đã nhập
  expect(new_description).toEqual(description); // Kiểm tra description mới đúng với description đã nhập
});
