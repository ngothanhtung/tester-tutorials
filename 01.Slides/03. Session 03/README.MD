# Hướng dẫn viết test case

## I. Giới thiệu

Trong bài này, chúng ta sẽ tìm hiểu về các khái niệm cơ bản liên quan đến test case, cách tạo test case hiệu quả và một số ví dụ minh họa.

## II. Khái niệm cơ bản về test case

### Test case là gì?

Test case là tập hợp các điều kiện, dữ liệu đầu vào và kết quả mong đợi dùng để kiểm tra chức năng, tính năng hoặc yêu cầu của một ứng dụng, hệ thống phần mềm.

### Mục đích của test case

Mục đích của việc tạo test case là để đảm bảo rằng phần mềm hoạt động đúng như mong đợi, giúp tìm ra các lỗi, vấn đề trong quá trình phát triển và đảm bảo chất lượng sản phẩm cuối cùng.

## III. Cách tạo test case hiệu quả

### Đọc kỹ yêu cầu và tài liệu

Trước khi bắt đầu tạo test case, hãy đọc kỹ các yêu cầu, tài liệu kỹ thuật liên quan để hiểu rõ về chức năng, tính năng cần kiểm tra.

## Sử dụng kỹ thuật phân tích biên (Boundary Analysis)

Kỹ thuật phân tích biên giúp tạo ra các test case hiệu quả khi kiểm tra giá trị đầu vào. Các test case này sẽ kiểm tra các giá trị ở ranh giới đầu vào, ví dụ như giá trị nhỏ nhất, giá trị lớn nhất hoặc giá trị ngay sát biên giới đó.

### Tạo test case cho các điều kiện đặc biệt

Đừng quên tạo test case cho các trường hợp đặc biệt, ví dụ như trường hợp lỗi, trường hợp không hợp lệ hoặc các điều kiện ngoại lệ.

### Tạo test case cho các kịch bản sử dụng thực tế

Tạo test case dựa trên các kịch bản sử dụng thực tế sẽ giúp đánh giá chính xác hơn về khả năng hoạt động của phần mềm trong môi trường thực tế.

### Đảm bảo rõ ràng, dễ hiểu và theo đúng mẫu

Viết test case sao cho rõ ràng, dễ hiểu và theo đúng mẫu sẽ giúp cho việc kiểm tra và theo dõi dễ dàng hơn. Một test case tốt nên bao gồm các thông tin sau:

- ID test case: Mã định danh duy nhất cho mỗi test case.
- Tên test case: Tên ngắn gọn, dễ hiểu và theo đúng mẫu.
- Mô tả: Mô tả chi tiết về mục đích của test case.
- Điều kiện tiên quyết: Các điều kiện cần được đáp ứng trước khi thực hiện test case.
- Bước thực hiện: Danh sách các bước thực hiện chi tiết và rõ ràng để kiểm tra chức năng hoặc tính năng.
- Dữ liệu đầu vào: Các dữ liệu cần nhập hoặc sử dụng trong quá trình kiểm tra.
- Kết quả mong đợi: Kết quả mà hệ thống nên xuất ra sau khi thực hiện test case.
- Kết quả thực tế: Kết quả mà hệ thống thực sự xuất ra sau khi thực hiện test case (để so sánh với kết quả mong đợi).
- Trạng thái kết luận: Trạng thái kết luận sau khi kiểm tra test case (đạt, không đạt, chưa kiểm tra, không thể kiểm tra).

## IV. Ví dụ minh họa

Giả sử chúng ta cần tạo test case cho chức năng đăng nhập của một ứng dụng.
Dưới đây là một số test case mẫu:

**Test case 1:**

- ID test case: TC001
- Tên test case: Đăng nhập thành công
- Mô tả: Kiểm tra đăng nhập thành công với thông tin hợp lệ.
- Điều kiện tiên quyết: Người dùng đã đăng ký tài khoản và kích hoạt.
- Bước thực hiện:
  - Mở ứng dụng và truy cập màn hình đăng nhập.
  - Nhập tên đăng nhập và mật khẩu hợp lệ.
  - Nhấn nút "Đăng nhập".
- Dữ liệu đầu vào: Tên đăng nhập và mật khẩu hợp lệ.
- Kết quả mong đợi: Đăng nhập thành công và chuyển đến màn hình chính của ứng dụng.
- Kết quả thực tế: Đăng nhập thành công và chuyển đến màn hình chính của ứng dụng.
- Trạng thái kết luận: Đạt.

**Test case 2:**

- ID test case: TC002
- Tên test case: Đăng nhập thất bại với mật khẩu không đúng.
- Mô tả: Kiểm tra đăng nhập thất bại với mật khẩu không đúng.
- Điều kiện tiên quyết: Người dùng đã đăng ký tài khoản và kích hoạt.
- Bước thực hiện:
  - Mở ứng dụng và truy cập màn hình đăng nhập.
  - Nhập tên đăng nhập hợp lệ và mật khẩu không đúng.
  - Nhấn nút "Đăng nhập".
- Dữ liệu đầu vào: Tên đăng nhập hợp lệ và mật khẩu không đúng.
- Kết quả mong đợi: Hiển thị thông báo lỗi "Mật khẩu không đúng" và không cho phép đăng nhập.
- Kết quả thực tế: Hiển thị thông báo lỗi "Mật khẩu không đúng" và không cho phép đăng nhập.
- Trạng thái kết luận: Đạt.

**Test case 3:**

- ID test case: TC003
- Tên test case: Đăng nhập thất bại với tên đăng nhập không tồn tại.
- Mô tả: Kiểm tra đăng nhập thất bại với tên đăng nhập không tồn tại.
- Điều kiện tiên quyết: Người dùng chưa đăng ký tài khoản hoặc tài khoản chưa được kích hoạt.
- Bước thực hiện:
  - Mở ứng dụng và truy cập màn hình đăng nhập.
  - Nhập tên đăng nhập không tồn tại và mật khẩu bất kỳ.
  - Nhấn nút "Đăng nhập".
- Dữ liệu đầu vào: Tên đăng nhập không tồn tại và mật khẩu bất kỳ.
- Kết quả mong đợi: Hiển thị thông báo lỗi "Tên đăng nhập không tồn tại" và không cho phép đăng nhập.
- Kết quả thực tế: Hiển thị thông báo lỗi "Tên đăng nhập không tồn tại" và không cho phép đăng nhập.
- Trạng thái kết luận: Đạt.

## V. Kết luận

Việc tạo test case hiệu quả đóng vai trò quan trọng trong việc đảm bảo chất lượng phần mềm và tìm ra các lỗi, vấn đề trong quá trình phát triển.

Hãy tuân thủ các nguyên tắc và kỹ thuật trong việc tạo test case để đạt được kết quả kiểm tra tốt nhất. Chúc các bạn thành công trong việc tạo test case và kiểm tra phần mềm!
