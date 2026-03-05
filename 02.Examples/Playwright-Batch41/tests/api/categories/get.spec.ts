import { test, expect } from '@playwright/test';

const baseURL = 'https://server.softech.cloud';

test.describe('Categories API — GET', () => {
  test('GET /categories — trả về danh sách categories', async ({ request }) => {
    const response = await request.get(baseURL + '/online-shop/categories');

    // Kiểm tra mã trạng thái
    // pm.test("Status code is 200", () => {
    //   pm.response.to.have.status(200);
    // });

    expect(response.status()).toBe(200);

    // Kiểm tra thời gian phản hồi: Response time is less than 200ms
    const startTime = Date.now();
    const body = await response.json();
    const endTime = Date.now();

    expect(endTime - startTime).toBeLessThan(200);

    // Kiểm tra body và định dạng JSON
    /* 
    pm.test("Response must be valid and have a JSON body", () => {
      pm.response.to.have.body;
      pm.response.to.be.json;
    });
    */

    expect(Array.isArray(body)).toBeTruthy();

    // Kiểm tra schema của response (tương đương pm.expect(responseJson).to.be.jsonSchema(schema))
    const allowedKeys = ['id', 'name', 'description'];
    for (const item of body) {
      // additionalProperties: false — không cho phép field thừa
      for (const key of Object.keys(item)) {
        expect(allowedKeys, `Field không hợp lệ: "${key}"`).toContain(key);
      }

      // required: ['id', 'name', 'description']
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('description');

      // type checks
      expect(Number.isInteger(item.id)).toBe(true); // id: integer
      expect(typeof item.name).toBe('string'); // name: string
      expect(item.description === null || typeof item.description === 'string').toBe(true); // description: string | null
    }
  });
});
