import { test, expect } from '@playwright/test';

const baseURL = 'https://server.softech.cloud';

test.describe('Categories API — CREATE /categories', () => {
  let response: any;
  let body: any;
  let elapsed: number;

  const data = {
    name: 'Category AAAAA',
    description: 'Description for Category A',
  };

  test.beforeAll(async ({ request }) => {
    const startTime = Date.now();
    response = await request.post(baseURL + '/online-shop/categories', { data: data });
    elapsed = Date.now() - startTime;
    body = await response.json();
  });

  test('1. Kiểm tra mã trạng thái', () => {
    expect(response.status()).toBe(201);
  });

  test('2. Kiểm tra thời gian phản hồi < 200ms', () => {
    expect(elapsed).toBeLessThan(200);
  });

  test('3. Kiểm tra body là JSON hợp lệ', () => {
    expect(body).toBeDefined();
  });

  test('4. Kiểm tra response là đối tượng', () => {
    expect(typeof body === 'object' && body !== null).toBe(true);
  });

  test('5. Kiểm tra từng phần tử có đúng schema', () => {
    const { id, name, description } = body;
    expect(Number.isInteger(id) && id > 0).toBe(true);
    expect(name).toBe(data.name);
    expect(description).toBe(data.description);
  });
});
