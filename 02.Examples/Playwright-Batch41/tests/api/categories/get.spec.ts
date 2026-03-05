import { test, expect } from '@playwright/test';

const baseURL = 'https://server.softech.cloud';

test.describe('Categories API — GET /categories', () => {
  let response: any;
  let body: any[];
  let elapsed: number;

  test.beforeAll(async ({ request }) => {
    const startTime = Date.now();
    response = await request.get(baseURL + '/online-shop/categories');
    elapsed = Date.now() - startTime;
    body = await response.json();
  });

  test('1. Kiểm tra mã trạng thái', () => {
    expect(response.status()).toBe(200);
  });

  test('2. Kiểm tra thời gian phản hồi < 200ms', () => {
    expect(elapsed).toBeLessThan(200);
  });

  test('3. Kiểm tra body là JSON hợp lệ', () => {
    expect(body).toBeDefined();
  });

  test('4. Kiểm tra response là mảng', () => {
    expect(Array.isArray(body)).toBe(true);
  });

  test('5. Kiểm tra từng phần tử có đúng schema', () => {
    for (const { id, name, description } of body) {
      expect(Number.isInteger(id) && id > 0).toBe(true);
      expect(typeof name === 'string' && name !== '').toBe(true);
      expect(description === null || typeof description === 'string').toBe(true);
    }
  });
});

test.describe('Categories API — GET /categories/:id', () => {
  let response: any;
  let body: any;
  let elapsed: number;

  test.beforeAll(async ({ request }) => {
    const startTime = Date.now();
    response = await request.get(baseURL + '/online-shop/categories/1');
    elapsed = Date.now() - startTime;
    body = await response.json();
  });

  test('1. Kiểm tra mã trạng thái', () => {
    expect(response.status()).toBe(200);
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

  test('5. Kiểm tra phần tử có đúng schema', () => {
    const { id, name, description } = body;
    expect(Number.isInteger(id) && id > 0).toBe(true);
    expect(typeof name === 'string' && name !== '').toBe(true);
    expect(description === null || typeof description === 'string').toBe(true);
  });
});
