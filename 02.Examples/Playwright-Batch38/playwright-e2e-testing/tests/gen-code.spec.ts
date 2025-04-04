import { test, expect } from '@playwright/test';

// Chạy trước mỗi test bên dưới (Pre-condition)
// Login vào hệ thống trước khi chạy các test bên dưới
test.beforeEach(async ({ page }) => {});

test('has title', async ({ page }) => {});
