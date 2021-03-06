# Xây dựng mẫu kiểm thử cho form Login sau:

> Xem form (https://aptech-tester.web.app/login)

## I. Yêu cầu của form Login:

- Username: Không được để trống và có độ dài trong khoảng 3-30 ký tự.
- Password: Không được để trống và có độ dài trong khoảng 6-10 ký tự

### Các message thông báo lỗi:

- Username không được để trống.
- Độ dài Username phải nằm trong khoảng 3 đến 30 ký tự.
- Password không được để trống.
- Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự.
- Username hoặc Password đã nhập sai.

### Khi login thành công:

Nhập đúng username + password sẽ chuyển user vào màn hình chính.

## II. Testcase

### II.1 UI

- Kiểm tra icon, font size, font style, font color của các text trên màn hình login & Error validation
- Kiểm tra button “Sign In” highlighted khi hover mouse
- Kiểm tra button “Sign In” đổi màu khi mouse down
- Kiểm tra placeholder Username, Password mờ hoặc xoá khi click vào Username, Password textbox
- Kiểm tra placeholder Username, Password bị xoá khi nhập value vào Username, Password textbox
- Kiểm tra chức năng Paste trên keyboard (Ctrl + V) và right click (Mouse) hoạt động với username, password.
- Kiểm tra chức năng Copy trên keyboard (Ctrl + C) và right click (Mouse) hoạt động với username.
- Kiểm tra chức năng Copy trên keyboard (Ctrl + C) bị disable, right-click (chức năng Copy) disable với password.

### II.2 Functions

**Username:**

- Đăng nhập thành công với user hợp lệ
- Đăng nhập thành công với user = 3 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập thành công với user = 20 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập thành công với user = 30 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập không thành công với user không hợp lệ. => Hiện thị tin nhắn "Username hoặc Password đã nhập sai"
- Đăng nhập không thành công với user =null. => Hiện thị tin nhắn "Username không được để trống"
- Đăng nhập không thành công với user = 2 kí tự => Hiện thị tin nhắn "Độ dài Username phải nằm trong khoảng 3 đến 30 ký tự"
- Đăng nhập không thành công với user = 31 kí tự => Hiện thị tin nhắn "Độ dài Username phải nằm trong khoảng 3 đến 30 ký tự"
- Username không tự trim dấu cách đầu, cuối
- Check Special character, emoji 🌷👩👨

**Password**

- Đăng nhập thành công với passwword hợp lệ
- Đăng nhập thành công với password = 6 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập thành công với password = 8 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập thành công với password = 10 kí tự thường / ký tự unicode / ký tự bao gồm space
- Đăng nhập không thành công với passwword không hợp lệ. => Hiện thị tin nhắn "Username hoặc Password đã nhập sai"
- Đăng nhập không thành công với password = null. => Hiện thị tin nhắn "Password không được để trống"
- Đăng nhập không thành công với password = 5 kí tự. => Hiện thị tin nhắn " Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự"
- Đăng nhập không thành công với password = 11 kí tự. => Hiện thị tin nhắn " Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự"
- Password không tự trim dấu cách đầu, cuối
- Check Special character, emoji 🌷👩👨

### II.3 Security / Session

- Password không được lưu trong browser cookies
- Password phải được phân biệt Upper và lower case
- Khi reset/refresh màn hình, password, username phải clear
- User login từ 2 tab browser: Cùng mở 2 tabs, login từng tab. nếu sinh ra 2 session là lỗi
- User login 2 account trên cùng 1 browser, session account login trước phải kết thúc
