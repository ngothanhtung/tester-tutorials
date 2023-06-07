import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  await page.getByPlaceholder('Nhập tên đăng nhập').click();
  await page.getByPlaceholder('Nhập tên đăng nhập').fill('admin');

  await page.getByRole('textbox', { name: '* Name :' }).fill('TTTTT');
  await page.getByLabel('Description').fill('DDD');

  const errors = await page.locator('.ant-form-item-explain-error');
  expect(errors).toHaveCount(2);

  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByPlaceholder('Nhập tên đăng nhập').press('Tab');
  await page.getByPlaceholder('Nhập mật khẩu').fill('Tester@123');
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
});
