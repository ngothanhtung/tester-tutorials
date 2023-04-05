const axios = require('axios');

// add comment
// Login
// username: username or phone or email.
async function login(username, password) {
  try {
    const response = await axios.post('https://server.aptech.io/training/auth/login', {
      username: username,
      password: password,
    });

    return { ...response.data, ok: true };
  } catch (error) {
    if (error.response.status === 401) {
    }
    return { ...error.response.data, ok: false };
  }
}

module.exports = login;
