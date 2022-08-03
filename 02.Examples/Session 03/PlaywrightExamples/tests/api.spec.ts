import { test, expect } from '@playwright/test';

test('api: login', async ({ request }) => {
  const response = await request.post('https://training.softech.cloud/api/training/users/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: 'tungnt',
      password: '123456789',
    },
  });

  expect(response.ok()).toBeTruthy();

  expect(await response.json()).toContainEqual(
    expect.objectContaining({
      ok: true,
      login: true,
    }),
  );
});
