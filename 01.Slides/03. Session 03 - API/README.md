## API: Login

- Url: https://training.softech.cloud/api/training/users/login
- Method: POST
- Header:

```
Content-Type: application/json
```

- Body:

```json
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

## API: Delete a user

- Url: https://training.softech.cloud/api/training/users/:id
- Method: DELETE
- Params:

```
id = 615456cf4139ac6c5cc07fee
```

## API: Update a user

- Url: https://training.softech.cloud/api/training/users/:id
- Method: PUT
- Params:

```
id = 615456cf4139ac6c5cc07fee
```

- Body:

```json
{
  "email": "tungnt@softech.com",
  "password": "123456789",
  "fullName": "Ngô Thanh Tùng"
}
```
