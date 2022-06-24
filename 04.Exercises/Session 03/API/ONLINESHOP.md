# A. Bài tập chính (Online Shop):

## 🔶 API: Login

#### REQUEST:

- Url: https://training.softech.cloud/api/training/users/login
- Method: POST
- Body (Raw, JSON):

```json
{
  "username": "tungnt@softech.vn",
  "password": "123456789"
}
```

#### RESPONSE:

- If success (status = 200):

```json
{
  "user": {
    "id": 1,
    "email": "tungnt@softech.vn",
    "username": "tungnt",
    "firstName": "Tony",
    "lastName": "Woo",
    "isActive": true
  },
  "access_token": "..."
}
```

- If failed (status = 401):

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

---

## 🔶 API: List all categories (Authentication Bearer)

### REQUEST:

- Url: https://training.softech.cloud/api/training/users
- Authorization: Bearer <token>
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

---

## 🔶 API: Get a category (Authentication Bearer)

### REQUEST:

- Url: https://server.aptech.io/training/categories/:id
- Authorization: Bearer <token>
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
