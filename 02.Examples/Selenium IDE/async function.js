return (async function () {
  const headers = new Headers();
  headers.append('Authorization', 'Bearer 123456');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers,
  };

  const response = await fetch('https://server.aptech.io/online-shop/categories', requestOptions);
  const json = await response.json();
  return json;
})();
