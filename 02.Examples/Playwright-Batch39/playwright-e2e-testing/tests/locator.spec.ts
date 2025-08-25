import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/index.html');
});

test('status becomes submitted', async ({ page }) => {
  // ...
  // Lấy locator cho nút submit
  const submitButton = page.locator('#submit-button');
  // Xác thực nút submit có text = Submit
  await expect(submitButton).toHaveText('Save');
});

test('toBeChecked', async ({ page }) => {
  const locator = page.locator('#remember');
  await expect(locator).not.toBeChecked();
});

test('toBeDisabled', async ({ page }) => {
  const locator = page.locator('body > div > form > button');
  await expect(locator).toBeDisabled();
});

test('toBeEditable', async ({ page }) => {
  const locator = page.locator('#username');
  await expect(locator).toBeEditable();
});

// toBeInViewport
test('toBeInViewport', async ({ page }) => {
  const locator = page.locator('#button1');
  // scroll to bottom of page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await expect(locator).toBeInViewport();
});

// toContainText
test('toContainText', async ({ page }) => {
  const locator = page.locator('#address');
  await expect(locator).toContainText('24 Lê Thánh Tôn');
});

// toHaveAttribute
// Test <a /> to have target attribute
test('toHaveAttribute', async ({ page }) => {
  const locator = page.locator('#link');
  await expect(locator).toHaveAttribute('target', '_blank');
  await expect(locator).toHaveAttribute('title');
});
// toHaveCount
test('toHaveCount', async ({ page }) => {
  const locator = page.locator('input');
  await expect(locator).toHaveCount(3);
});

// toHaveCSS
test('toHaveCSS', async ({ page }) => {
  const locator = page.locator('#button1');
  await expect(locator).toHaveCSS('background-color', 'rgb(255, 255, 0)');
  await expect(locator).toHaveCSS('color', 'rgb(0, 0, 0)');
  await expect(locator).toHaveCSS('height', '60px');
  await expect(locator).toHaveCSS('border-radius', '12px');
});
// toHaveValue
test('toHaveValue', async ({ page }) => {
  const locator = page.locator('#username');
  await expect(locator).toHaveValue('Nguyen Van A');
});

// toHaveValues
test('toHaveValues', async ({ page }) => {
  const locator = page.locator('#favorite-colors');
  await expect(locator).toHaveValues(['R', 'B']);
});

test('toHaveId', async ({ page }) => {
  const locator = page.getByPlaceholder('Nhập tên đăng nhập');
  await expect(locator).toHaveId('login-form_username');
});
