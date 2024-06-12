import { test, expect } from '@playwright/test';

const url = 'https://server.aptech.io/auth/login';

test.describe('Login API', () => {
  const username = 'admin';
  const password = 'Tester@123';

  test('should login successfully', async ({ request }) => {
    // CALL API
    const response = await request.post(url, {
      data: { username, password },
    });
    const json = await response.json();
    console.log(json);

    // Must be 201 OK
    expect(response.status()).toBe(200);

    expect(response.ok()).toBeTruthy();
  });
});
