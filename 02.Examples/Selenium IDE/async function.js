return (async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const json = await response.json();
  return json;
})();
