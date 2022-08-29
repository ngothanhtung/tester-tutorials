# API TESTING WITH POSTMAN

## Documents

> https://learning.postman.com/docs/writing-scripts/script-references/test-examples/

> https://www.postman.com/postman/workspace/postman-answers

---

## 🔶 Pre-Request Script in a collection or in a request

```js
var options = {
  method: 'POST',
  url: 'https://server.aptech.io/training/auth/login',
  header: 'Content-Type:application/json',
  body: {
    mode: 'application/json',
    raw: {
      username: 'tungnt@softech.vn',
      password: '123456789',
    },
  },
};

pm.sendRequest(options, function (err, response) {
  if (err === null) {
    var json = response.json();
    pm.collectionVariables.set('access_token', json.access_token);
  }
});
```

---

## 🔶 API: List all categories (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories
- Authorization: Bearer <access_token>
- Method: GET

### RESPONSE:

```json
[
  {
    "id": 1,
    "name": "CPU",
    "description": "Cac loai CPU cho may tinh"
  },
  {
    "id": 2,
    "name": "HDD",
    "description": "Cac loai dia cung cho may tinh"
  }
]
```

### TESTS

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Response must be valid and have a body', function () {
  pm.response.to.be.withBody;
  pm.response.to.be.json;
});

pm.test('Json must be an array', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('array');
});

pm.test('Assert that every object contains keys or properties', () => {
  const responseJson = pm.response.json();
  responseJson.forEach((item) => {
    pm.expect(item).to.have.all.keys('id', 'name', 'description');
  });
});
```

---

## 🔶 API: Get a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Bearer <access_token>
- Method: GET
- Params: id = 1

### RESPONSE:

```json
{
  "id": 1,
  "name": "CPU",
  "description": "Cac loai CPU cho may tinh"
}
```

### TESTS

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Response must be valid and have a body', function () {
  pm.response.to.be.withBody;
  pm.response.to.be.json;
});

pm.test('Json must be a object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});

pm.test('Assert that object contains keys or properties', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.have.all.keys('id', 'name', 'description');
});
```

---

## 🔶 API: Create a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories
- Authorization: Bearer <access_token>
- Method: POST
- Body:

```json
{
  "name": "Tên sản phẩm",
  "description": "Mô tả ..."
}
```

### RESPONSE:

#### If success:

- Status = 201

```json
{
  "name": "Tên sản phẩm",
  "description": "Mô tả ...",
  "id": 1153
}
```

#### if failed:

- Status = 400
- Body:

```json
{
  "error": true,
  "errorMessage": "Error: Violation of UNIQUE KEY constraint 'UQ_Categories_Name'..."
}
```

### TESTS (if success)

```js
pm.test('Status code is 201', function () {
  pm.response.to.have.status(201);
});

pm.test('Response must be valid and have a body', function () {
  pm.response.to.be.withBody;
  pm.response.to.be.json;
});

pm.test('Json must be a object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});

pm.test('Assert that object contains keys or properties', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.have.all.keys('id', 'name', 'description');
});
```

### TESTS (if failed)

```js
pm.test('Status code is 400', function () {
  pm.response.to.have.status(400);
});

pm.test('Response must be valid and have a body', function () {
  pm.response.to.be.withBody;
  pm.response.to.be.json;
});

pm.test('Json must be a object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});

pm.test('Assert that object contains keys or properties', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.have.all.keys('error', 'errorMessage');
});

pm.test("Assert that errorMessage contains 'Cannot insert duplicate key'", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.errorMessage).to.include('Cannot insert duplicate key');
});
```

---

## 🔶 API: Update a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Bearer <access_token>
- Method: PATCH
- Params: id
- Body:

```json
{
  "name": "Tên sản phẩm",
  "description": "Mô tả ..."
}
```

### RESPONSE:

#### If success:

- Status = 200

```json
{
  "id": 1137,
  "name": "Sản phẩm 1031",
  "description": "Mô tả ... 1137"
}
```

#### if failed:

- Status = 410

### TESTS (if success)

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});

pm.test('Response must be valid and have a body', function () {
  pm.response.to.be.withBody;
  pm.response.to.be.json;
});

pm.test('Json must be a object', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.be.an('object');
});

pm.test('Assert that object contains keys or properties', () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson).to.have.all.keys('id', 'name', 'description');
});
```

### TESTS (if failed)

```js
pm.test('Status code is 410', function () {
  pm.response.to.have.status(410);
});
```

---

## 🔶 API: Delete a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Bearer <access_token>
- Method: DELETE
- Params: id

### RESPONSE:

#### If success:

- Status = 200

#### if failed:

- Status = 410

### TESTS (if success)

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});
```

### TESTS (if failed)

```js
pm.test('Status code is 410', function () {
  pm.response.to.have.status(410);
});
```
