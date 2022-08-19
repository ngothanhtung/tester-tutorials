## Bài 1:

1. Login với thông tin:

   - Url: https://server.aptech.io/training/auth/login
   - Method: POST
   - Body (Raw, JSON):

     ```json
     {
       "username": "tungnt@softech.vn",
       "password": "123456789"
     }
     ```

2. Bóc tách access_token:
   - Dùng JSON Extractor (Post Processors)
   - Lưu vào biến: my_access_token
3. Thực hiện lấy danh sách Categories với thông tin:
   - Url: https://server.aptech.io/training/categories
   - Authorization: Bearer ${my_access_token}
   - Method: GET
