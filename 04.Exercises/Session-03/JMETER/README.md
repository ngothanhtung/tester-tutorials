# Bài 1: Lấy thông tin access_token

1. Login với thông tin:

   - Url: `https://server.aptech.io/auth/login`
   - Method: POST
   - Body (Raw, JSON):

     ```json
     {
       "username": "tungnt@softech.vn",
       "password": "123456789"
     }
     ```

2. Bóc tách access_token:
   - Dùng JSON Extractor (nằm trong Post Processors)
   - Lưu vào biến: my_access_token
3. Thực hiện lấy danh sách Categories với thông tin:

- Url: `https://server.aptech.io/online-shop/categories`
- Authorization: Bearer ${my_access_token}
- Method: GET

## Bài 2: Đọc file CSV

1. Đọc file CSV với CSV Data Set Config (nằm trong Config Element) lưu vào 2 biến: username,password
2. Thực hiện Login với:

   - Url: `https://server.aptech.io/auth/login`
   - Method: POST
   - Body (Raw, JSON):

     ```json
     {
       "username": ${username},
       "password": ${password}
     }
     ```
