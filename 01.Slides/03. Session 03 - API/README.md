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

- Response:
  If user exists

```json
{
  "ok": true,
  "register": false,
  "message": "User is already exists"
}
```

If success:

```json
{
  "ok": true,
  "register": true,
  "result": {
    "data": {
      "username": "tuana123",
      "password": "123456789",
      "email": "tuanna@softech.edu.vn",
      "fullName": "Nguyễn Anh Tuấn",
      "_id": "6283988ceffcfb0ae4fd1c2b"
    },
    "result": {
      "result": {
        "n": 1,
        "ok": 1
      },
      "connection": {
        "_events": {},
        "_eventsCount": 4,
        "id": 1,
        "address": "127.0.0.1:27017",
        "bson": {},
        "socketTimeout": 360000,
        "monitorCommands": false,
        "closed": false,
        "destroyed": false,
        "lastIsMasterMS": 1
      },
      "ops": [
        {
          "username": "tuana123",
          "password": "123456789",
          "email": "tuanna@softech.edu.vn",
          "fullName": "Nguyễn Anh Tuấn",
          "_id": "6283988ceffcfb0ae4fd1c2b"
        }
      ],
      "insertedCount": 1,
      "insertedId": "6283988ceffcfb0ae4fd1c2b",
      "n": 1,
      "ok": 1
    }
  }
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
