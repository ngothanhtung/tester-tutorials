// import from the sum.js file
const { login, register } = require('../src/auth');

describe('auth/login', () => {
  test('Login must be successful', async () => {
    const result = await login({ username: 'tungnt@softech.vn', password: '123456789' });

    expect(result.ok).toBe(true);
  });

  test('Login must be failed', async () => {
    const result = await login('tungnt@softech.vn', '987654321');

    expect(result.ok).toBe(false);
  });
});

describe('auth/register', () => {
  test('Register must be successful', async () => {
    const result = await register({ username: 'admin', password: '123456789', email: 'tungnt@softech.vn', phone: '0123456789', address: 'Hanoi', fullname: 'Ngo Thanh Tung' });

    expect(result.ok).toBe(true);
  });
});
