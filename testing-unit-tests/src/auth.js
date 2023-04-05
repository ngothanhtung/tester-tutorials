const axios = require('axios');

// Login with username & password
//
async function login({ username, password }) {
  try {
    const response = await axios.post('https://server.aptech.io/training/auth/login', {
      username: username,
      password: password,
    });

    return { ...response.data, ok: true };
  } catch (error) {
    return { ...error.response.data, ok: false };
  }
}

async function register({ username, password, email, phone, address, fullname }) {
  try {
    const response = await axios.post('https://server.aptech.io/training/auth/register', {
      username: username,
      password: password,
      email: email,
      phone: phone,
      address: address,
      fullname: fullname,
    });

    return { ...response.data, ok: true };
  } catch (error) {
    return { ...error.response.data, ok: false };
  }
}

module.exports = { login, register };
