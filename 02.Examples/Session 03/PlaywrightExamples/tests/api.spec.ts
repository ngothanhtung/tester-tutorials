import { test, expect } from '@playwright/test';

test('api: login', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users/login';
  const data = {
    username: 'tungnt',
    password: 'new password',
  };

  const response = await request.post(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  });

  expect(response.ok()).toBeTruthy();
  const json = await response.json();

  expect(await response.json()).toMatchObject(
    expect.objectContaining({
      login: true,
      ok: true,
    }),
  );
});

test('api: register users', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users/register';
  const data = {
    username: 'tungnt',
    email: 'tungnt@softech.edu.vn',
    password: '123456789',
    fullName: 'Ngô Thanh Tùng',
  };

  const response = await request.post(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  });

  expect(response.ok()).toBeTruthy();
});

test('api: get users - basic', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users/auth/basic';

  const response = await request.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic dHVuZ250OjEyMzQ1Njc4OQ==',
    },
  });

  expect(response.ok()).toBeTruthy();
});

test('api: get users - api key - 200', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users/auth/api-key';

  const response = await request.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'aptech-tester-pro',
    },
  });

  expect(response.status() === 200).toBeTruthy();
});

test('api: get users - api key - 401', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users/auth/api-key';

  const response = await request.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'aptech-tester-pro1',
    },
  });

  expect(response.status() === 401).toBeTruthy();
});

test('api: get users - bearer token', async ({ request }) => {
  const url = 'https://training.softech.cloud/api/training/users';

  const response = await request.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJOZ8O0IFRoYW5oIFTDuW5nIiwiZW1haWwiOiJ0dW5nbnRAc29mdGVjaC5lZHUudm4ifSwiaWF0IjoxNjYwMTMxNzc5LCJleHAiOjE2NjAyMTgxNzksImF1ZCI6InNvZnRlY2guY2xvdWQiLCJpc3MiOiJzb2Z0ZWNoLmNsb3VkIiwic3ViIjoiNjJlZjFmZmI3ZGRkY2MxMzk0NTQ1MDMxIn0.gOeCqUb-4RfgrU_w1OJVGlw0SJ74lyPj2oye00o50jierJSgFC2xD8cJKQWSJnoqf0bE6sEcNzQGemNSbWYUQA',
    },
  });

  expect(response.ok()).toBeTruthy();
});

test('api: delete users - bearer token', async ({ request }) => {
  const id = '62f22bb67dddcc1394545035';
  const url = 'https://training.softech.cloud/api/training/users/' + id;

  const response = await request.delete(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJOZ8O0IFRoYW5oIFTDuW5nIiwiZW1haWwiOiJ0dW5nbnRAc29mdGVjaC5lZHUudm4ifSwiaWF0IjoxNjYwMTMxNzc5LCJleHAiOjE2NjAyMTgxNzksImF1ZCI6InNvZnRlY2guY2xvdWQiLCJpc3MiOiJzb2Z0ZWNoLmNsb3VkIiwic3ViIjoiNjJlZjFmZmI3ZGRkY2MxMzk0NTQ1MDMxIn0.gOeCqUb-4RfgrU_w1OJVGlw0SJ74lyPj2oye00o50jierJSgFC2xD8cJKQWSJnoqf0bE6sEcNzQGemNSbWYUQA',
    },
  });

  expect(response.ok()).toBeTruthy();
});

test('api: patch users - bearer token', async ({ request }) => {
  const id = '62ef1ffb7dddcc1394545031';
  const url = 'https://training.softech.cloud/api/training/users/' + id;

  const data = {
    password: 'new password',
    fullName: 'Tung Ngo',
  };

  const response = await request.patch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidHVuZ250IiwiZnVsbG5hbWUiOiJOZ8O0IFRoYW5oIFTDuW5nIiwiZW1haWwiOiJ0dW5nbnRAc29mdGVjaC5lZHUudm4ifSwiaWF0IjoxNjYwMTMxNzc5LCJleHAiOjE2NjAyMTgxNzksImF1ZCI6InNvZnRlY2guY2xvdWQiLCJpc3MiOiJzb2Z0ZWNoLmNsb3VkIiwic3ViIjoiNjJlZjFmZmI3ZGRkY2MxMzk0NTQ1MDMxIn0.gOeCqUb-4RfgrU_w1OJVGlw0SJ74lyPj2oye00o50jierJSgFC2xD8cJKQWSJnoqf0bE6sEcNzQGemNSbWYUQA',
    },
    data: data,
  });

  expect(response.ok()).toBeTruthy();
});
