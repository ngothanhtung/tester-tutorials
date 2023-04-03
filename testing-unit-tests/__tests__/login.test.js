// import from the sum.js file
const login = require('../src/login');

describe('auth', () => {
  test('Login must be successful', async () => {
    const result = await login('tungnt@softech.vn', '123456789');

    expect(result.ok).toBe(true);
  });

  test('Login must be failed', async () => {
    const result = await login('tungnt@softech.vn', '987654321');

    expect(result.ok).toBe(false);
  });
});
