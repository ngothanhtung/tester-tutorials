# Một hãng hàng không mới được thành lập và công bố giá vé như sau:

## Business Class:

- Người lớn: 4.000.000 VND
- Trẻ em: 1.500.000VND

## Economy Class:

- Người lớn: 3.000.000 VND
- Trẻ em: 700.000VND

## Quy định về tuổi:

- Trẻ em: < 7 tuổi
- Người lớn: >= 7 tuổi

Hãng yêu cầu viết một phần mềm nhỏ để tự động tính ra số tiền phải trả tương ứng với tuổi của khách hàng đăng ký mua vé. Điều kiện thực hiện là vé có đủ cho người đăng ký.

# Giả sử yêu cầu của chức năng và giao diện được mô tả như sau:

## Yêu cầu 1: Nhập thông tin đăng ký vé bao gồm:

- Tên người đăng ký (Name)
- Địa chỉ (Address)
- Số CMT (ID Card No)
- Ngày tháng năm sinh (Date of Birth): cho phép nhập theo định dạng DD/MM/YYYY
- Loại vé (Type of Class): cho phép chọn trong danh sách 2 giá trị Business Class và Economy Class
- Số tiền vé (Payment): Không cho phép sửa đổi giá trị

> Xem form (https://github.com/ngothanhtung/tester-tutorials/blob/main/04.Exercises/HTML/images/booking-form.png?raw=true)

## Yêu cầu 2: Kiểm tra các ràng buộc: Name, ID Card No, Date of Birth và Type of Class bắt buộc phải nhập dữ liệu.

## Yêu cầu 3: Tự động xác định số tuổi của khách hàng theo quy tắc:

- Nếu năm hiện tại > năm sinh thì Tuổi = Năm hiện tại – Năm sinh.
- Nếu năm hiện tại = năm sinh thì Tuổi = 1
- Tuổi > 0

## Yêu cầu 4: Tự động xác định số tiền vé (Payment) của khách hàng theo giá vé được công bố trên.

## Yêu cầu 5: Lưu thông tin: Chỉ cho phép lưu thông tin đăng ký mua vé nếu số tiền vé lớn hơn 0.
