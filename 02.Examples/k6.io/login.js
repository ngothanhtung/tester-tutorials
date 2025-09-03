import http from 'k6/http';

export const options = {
  vus: 1, // 100 virtual users
  duration: '1s', // chạy trong 1 giây
  iterations: 1, // 100 iterations
};

export default function () {
  const url = 'https://server.aptech.io/auth/login';
  const payload = JSON.stringify({
    username: 'tungnt@softech.vn',
    password: '123456789',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}
