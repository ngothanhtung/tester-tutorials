import { test, expect } from '@playwright/test';

test('locator', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/tests/index.html');
  // Works because count knows what to do with multiple matches:
  // const lastButton = await page.locator('button').last();
  // lastButton.click();

  const c = await page.locator('.button', { hasText: 'Data Button 2' }).count();
});
