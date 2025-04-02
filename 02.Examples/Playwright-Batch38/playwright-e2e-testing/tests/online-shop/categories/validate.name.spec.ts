import { test, expect } from '@playwright/test';

// Chạy trước mỗi test bên dưới (Pre-condition)
// Login vào hệ thống trước khi chạy các test bên dưới
test.beforeEach(async ({ page }) => {
  // Điều hướng đến trang đăng nhập
  await page.goto('https://os-admin.aptech.io/login');

  // Điền thông tin đăng nhập bằng locator
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(1) > input').fill('tungnt@softech.vn'); // Thay X1 bằng selector thực tế
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div:nth-child(2) > input').fill('123456789'); // Thay X2 bằng selector thực tế

  // Click vào nút đăng nhập
  await page.locator('#root > div.account-pages.my-5.pt-sm-5 > div > div > div > div.overflow-hidden.card > div.pt-0.card-body > div.p-2 > form > div.mt-3.d-grid > button').click(); // Thay X3 bằng selector thực tế

  // Chờ điều hướng và kiểm tra URL
  await page.waitForURL('https://os-admin.aptech.io/dashboard');

  await page.goto('https://os-admin.aptech.io/online-shop/data-management/categories');
});

test('Validate name of category is required', async ({ page }) => {
  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 200ms
  await page.waitForTimeout(200);

  // Test expect:
  const error = page.locator('#create-form_name_help > div');
  await expect(error).toBeVisible(); // Kiểm tra có thông báo lỗi xuất hiện.

  // Kiểm tra thông báo lỗi phải có nội dung là "Category's name is required"
  await expect(error).toHaveText("Category's name is required");

  // await page.waitForTimeout(10000);
});

test('Validate name of category is 50 characters', async ({ page }) => {
  // Test data:
  const name = 'CategoryXYCategoryXYCategoryXYCategoryXYCategoryXY';
  await page.locator('#create-form_name').fill(name);
  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 200ms
  await page.waitForTimeout(200);

  // Test expect:
  const error = page.locator('#create-form_name_help > div');
  await expect(error).not.toBeVisible(); // Kiểm tra có thông báo lỗi xuất hiện.
});

test('Validate name of category is 49 characters', async ({ page }) => {
  // Test data:
  const name = 'CategoryXYCategoryXYCategoryXYCategoryXYCategoryX';
  await page.locator('#create-form_name').fill(name);
  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 200ms
  await page.waitForTimeout(200);

  // Test expect:
  const error = page.locator('#create-form_name_help > div');
  await expect(error).not.toBeVisible(); // Kiểm tra có thông báo lỗi xuất hiện.
});

test('Validate name of category is 1 character', async ({ page }) => {
  // Test data:
  const name = 'C';
  await page.locator('#create-form_name').fill(name);
  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 200ms
  await page.waitForTimeout(200);

  // Test expect:
  const error = page.locator('#create-form_name_help > div');
  await expect(error).not.toBeVisible(); // Kiểm tra có thông báo lỗi xuất hiện.
});

test('Validate name of category is 51 characters', async ({ page }) => {
  // Test data:
  const name = 'CategoryXYCategoryXYCategoryXYCategoryXYCategoryXYZ';
  await page.locator('#create-form_name').fill(name);
  // Click nút Save
  await page.locator('#create-form > div:nth-child(3) > div > div > div > div > button').click();

  // Chờ tầm 200ms
  await page.waitForTimeout(200);

  // Test expect:
  const error = page.locator('#create-form_name_help > div');
  await expect(error).toBeVisible(); // Kiểm tra có thông báo lỗi xuất hiện.
});
