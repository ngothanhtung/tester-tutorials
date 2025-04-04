import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');
  await page.getByRole('textbox', { name: '* Tên đăng nhập :' }).fill('admin');
  await page.getByRole('textbox', { name: '* Mật khẩu :' }).fill('Tester@123');
  await page.getByRole('checkbox', { name: 'Ghi nhớ tài khoản' }).uncheck();
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
  // Wait 1000
  await page.waitForTimeout(1000);

  // expect toHaveUrl
  await page.waitForURL('https://aptech-tester.web.app/home');
});
