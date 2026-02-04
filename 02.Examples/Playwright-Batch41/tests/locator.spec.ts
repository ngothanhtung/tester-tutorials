import { test, expect } from '@playwright/test';

// Trước khi chạy mỗi test case
test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  // await page.goto('https://aptech-tester.web.app/ticket-booking');
});

test('toBeChecked', async ({ page }) => {
  const locator = page.locator('#remember');
  await expect(locator).not.toBeChecked();
});

test('toBeDisabled', async ({ page }) => {
  const locator = page.locator('body > div.container.mt-5 > form > button');
  await expect(locator).toBeDisabled();
});

test('toBeEditable', async ({ page }) => {
  const locator = page.locator('#username');
  await expect(locator).toBeEditable();
});

test('toBeEmpty', async ({ page }) => {
  const locator = page.locator('#empty');
  await expect(locator).toBeEmpty();
});

test('toBeFocused', async ({ page }) => {
  const locator = page.locator('#username');
  await expect(locator).toBeFocused();
});

// toBeInViewport
test('toBeInViewport', async ({ page }) => {
  const locator = page.locator('#button1');
  // scroll to bottom of page
  // await page.evaluate(() => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
  await expect(locator).toBeInViewport();
});

// toContainText
test('toContainText', async ({ page }) => {
  const locator = page.locator('#address');
  await expect(locator).toContainText('24 Lê Thánh Tôn');
});

test('toHaveAttribute', async ({ page }) => {
  const locator = page.locator('#link');
  await expect(locator).toHaveAttribute('target', '_blank');
  await expect(locator).toHaveAttribute('title');
  await expect(locator).toHaveAttribute('title', 'Website của Aptech Đà Nẵng');
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

test('Kiểm tra thẻ div có màu nền đỏ', async ({ page }) => {
  const locator = page.locator('#empty');
  await expect(locator).toHaveCSS('background-color', 'rgb(255, 0, 0)');
});
