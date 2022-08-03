import { test, expect } from '@playwright/test';

test('Test: toBeChecked', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('https://aptech-tester.web.app/login/v2');

  const rememerLocator = page.locator('#login-form_remember');
  await expect(rememerLocator).toBeChecked();
});

test('Test: toBeDisabled', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  const emailLocator = page.locator('#email');
  await expect(emailLocator).toBeDisabled();
});

test('Test: toBeEditable', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  const emailLocator = page.locator('#email');
  await expect(emailLocator).toBeEditable();
});

test('Test: toBeFocused', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  const emailLocator = page.locator('#email');
  await expect(emailLocator).toBeFocused({
    timeout: 500,
  });
});

test('Test: toBeHidden', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  const locator = page.locator('#hidden-button');
  await expect(locator).toBeHidden({
    timeout: 500,
  });
});

test('Test: toContainText', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('https://aptech-tester.web.app/login/v2');

  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  const locator = page.locator('#login-form > div:nth-child(1) > div.ant-col.ant-col-8.ant-form-item-control > div.ant-form-item-explain.ant-form-item-explain-connected > div');
  await expect(locator).toContainText('không được để trống');
});

test('Test: toHaveAttribute', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  const locator = page.locator('#email');
  await expect(locator).toHaveAttribute('placeholder', 'Enter your email');
  await expect(page.locator('#data-button')).toHaveAttribute('data', 'tester');
});

test('Test: toHaveClass', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#data-button')).toHaveClass('btn button');
});

test('Test: toHaveCount', async ({ page }) => {
  await page.goto('https://aptech-tester.web.app/login/v2');

  await page.locator('#login-form > div:nth-child(4) > div > div > div > button').click();

  await expect(page.locator('.ant-form-item-explain-error')).toHaveCount(2);
});

test('Test: toHaveCSS', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#data-button')).toHaveCSS('background-color', 'rgb(0, 255, 255)');
});

test('Test: toHaveValue', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#email')).toHaveValue('tungnt@softech.vn');
});

test('Test: toHaveValues', async ({ page }) => {
  // Go to https://aptech-tester.web.app/login/v2
  await page.goto('http://127.0.0.1:5500/tests/index.html');

  await expect(page.locator('#cars')).toHaveValues(['volvo', 'audi']);
});
