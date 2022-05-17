## API: Login

- Url: https://training.softech.cloud/api/training/users/login
- Method: POST
- Header:

```
Content-Type: application/json
```

- Body:

```
{
  "username": "tungnt",
  "password": "123456789"
}
```

## API: Get all users

- Url: https://training.softech.cloud/api/training/users
- Method: GET

## API: Register a new user

- Url: https://training.softech.cloud/api/training/users/register
- Method: POST
- Body:

```json
{
  "username": "tungnt",
  "email": "tungnt@softech.edu.vn",
  "password": "123456789",
  "fullName": "Ngô Thanh Tùng"
}
```
