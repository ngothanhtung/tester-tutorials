import { test, expect } from '@playwright/test';

test('toBeCheck', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login');

  await expect(page.locator('#login-form_remember')).toBeChecked();
});

test('toBeDisabled', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  await expect(page.locator('body > button')).toBeDisabled();
});

test('toBeEditable', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  await expect(page.locator('body > input[type="text"]')).toBeEditable();
});

test('toHaveAccessibleDescription', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('save-button');
  await expect(locator).toHaveAccessibleDescription('Save results to disk');
});

test('toHaveAttribute', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('link');
  await expect(locator).toHaveAttribute('target');
});

test('toHaveCount', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByRole('button');

  await expect(locator).toHaveCount(2);
});

test('toHaveCSS', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('button-height');

  await expect(locator).toHaveCSS('height', '54px');
});

// Dành cho các element hiển thị dữ liệu
test('toHaveText', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('link');

  await expect(locator).toHaveText('Aptech');
});

// Dành cho input
test('toHaveValue', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('name');

  await expect(locator).toHaveValue('Peter');
});

// Dành cho input có nhiều giá trị
test('toHaveValues', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/02.Examples/HTML/element.html');

  const locator = page.getByTestId('color');

  await expect(locator).toHaveValues(['R', 'B']);
});
