# HOMEWORK - API TESTING WITH POSTMAN

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
- Authorization: Inherit auth from parent
- Method: GET

### RESPONSE:

- Status code is 200
- Response must be valid and have a body (json)
- Body is an array
- Every object (in array) contains keys or properties (id, name, description)

```json
[
  {
    "id": 1,
    "name": "CPU",
    "description": "Cac loai CPU cho may tinh"
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
- Authorization: Inherit auth from parent
- Method: GET
- Params: id = number

### RESPONSE:

#### If success:

- Status code is 200
- Response must be valid and have a body (json)
- Body is an object
- Object contains keys or properties (id, name, description)

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

#### If failed (Invalid route params):

- Status = 400

```json
{
  "statusCode": 400,
  "message": ["Validation failed (numeric string is expected)"],
  "error": "Invalid route params"
}
```

#### If failed (Not found category by id):

- Status = 410

---

## 🔶 API: Create a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories
- Authorization: Inherit auth from parent
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

#### if failed (Violation of UNIQUE KEY)

- Status = 400

```json
{
  "statusCode": 400,
  "message": ["Error: Violation of UNIQUE KEY constraint 'UQ_Categories_Name'. Cannot insert duplicate key in object 'dbo.Categories'..."],
  "error": "Bad Request"
}
```

#### if failed (name should not be empty)

- Status = 400

```json
{
  "statusCode": 400,
  "message": ["name should not be empty"],
  "error": "Bad Request"
}
```

### TESTS

#### If success

- Status code is 201
- Response must be valid and have a body (json)
- Body is an object
- Object contains keys or properties (id, name, description)

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

#### If failed

- Status code is 400
- Response must be valid and have a body (json)
- Body is an object
- Object contains keys or properties (statusCode, error, message)

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
  pm.expect(responseJson).to.have.all.keys('statusCode', 'error', 'message');
});

pm.test("Assert that errorMessage contains 'Cannot insert duplicate key in object ...'", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.errorMessage).to.include("Cannot insert duplicate key in object 'dbo.Categories'");
});
```

---

## 🔶 API: Update a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Inherit auth from parent
- Method: PATCH
- Params: id = number
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

### TESTS

#### If success

- Status code is 200
- Response must be valid and have a body (json)
- Body is an object
- Object contains keys or properties (id, name, description)

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

#### If failed

- Status = 410

```js
pm.test('Status code is 410', function () {
  pm.response.to.have.status(410);
});
```

---

## 🔶 API: Delete a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Inherit auth from parent
- Method: DELETE
- Params: id = number

### RESPONSE:

#### If success:

- Status = 200

#### if failed:

- Status = 410

### TESTS (if success)

- Status = 200

```js
pm.test('Status code is 200', function () {
  pm.response.to.have.status(200);
});
```

### TESTS (if failed)

- Status = 410

```js
pm.test('Status code is 410', function () {
  pm.response.to.have.status(410);
});
```

# Làm tương tự bài trên tương ứng với các API khác:

1. Customers

   > https://server.aptech.io/training/customers

   - GET
   - GET/id
   - POST
   - PATCH/id
   - DELETE/id

2. Employees

   > https://server.aptech.io/training/employees

   - GET
   - GET/id
   - POST
   - PATCH/id
   - DELETE/id

3. Products

   > https://server.aptech.io/training/products

   - GET
   - GET/id
   - POST
   - PATCH/id
   - DELETE/id

4. Suppliers

   > https://server.aptech.io/training/suppliers

   - GET
   - GET/id
   - POST
   - PATCH/id
   - DELETE/id

5. Orders

   > https://server.aptech.io/training/orders

   - GET
   - GET/id
   - POST
   - PATCH/id
   - DELETE/id
