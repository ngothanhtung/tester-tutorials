const { test, expect, chromium } = require('@playwright/test');
test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('First test', async ({ page }) => {
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
