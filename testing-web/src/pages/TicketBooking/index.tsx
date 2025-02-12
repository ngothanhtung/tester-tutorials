import React from 'react';
import 'moment/locale/vi';
import 'numeral/locales/vi';
import ReactMarkdown from 'react-markdown';
import { Form, Input, Button, DatePicker, Divider, Select, Result, Descriptions, Row, Col, message, Radio } from 'antd';
import moment from 'moment';
import numeral from 'numeral';

try {
  // MOMENT
  moment.locale('vi');
  // NUMERAL
  numeral.locale('vi');
} catch (err) {
  console.log(err);
}

const markdown = `
## YÊU CẦU: 

## Một hãng hàng không mới được thành lập và công bố giá vé như sau:

### Business Class:

- Người lớn: 4.000.000 VND
- Trẻ em: 1.500.000VND

### Economy Class:

- Người lớn: 3.000.000 VND
- Trẻ em: 700.000VND

### Quy định về tuổi:

- Trẻ em: < 7 tuổi
- Người lớn: >= 7 tuổi

Hãng yêu cầu viết một phần mềm nhỏ để tự động tính ra số tiền phải trả tương ứng với tuổi của khách hàng đăng ký mua vé. Điều kiện thực hiện là vé có đủ cho người đăng ký.

## Giả sử yêu cầu của chức năng và giao diện được mô tả như sau:

### Yêu cầu 1: Nhập thông tin đăng ký vé bao gồm:

- Tên người đăng ký (Name)
- Địa chỉ (Address)
- Số CMT (ID Card No)
- Ngày tháng năm sinh (Date of Birth): cho phép nhập theo định dạng DD/MM/YYYY
- Loại vé (Type of Class): cho phép chọn trong danh sách 2 giá trị Business Class và Economy Class
- Số tiền vé (Payment): Không cho phép sửa đổi giá trị

> Xem form (https://github.com/ngothanhtung/tester-tutorials/blob/main/04.Exercises/HTML/images/booking-form.png?raw=true)

### Yêu cầu 2: Kiểm tra các ràng buộc: Name, ID Card No, Date of Birth và Type of Class bắt buộc phải nhập dữ liệu.
- Thông báo khi không nhập liệu có cấu trúc: Vui lòng nhập [Tên trường dữ liệu]! Đối với loại vé thì: Vui lòng chọn loại vé!

### Yêu cầu 3: Tự động xác định số tuổi của khách hàng theo quy tắc:

- Nếu năm hiện tại > năm sinh thì Tuổi = Năm hiện tại – Năm sinh.
- Nếu năm hiện tại = năm sinh thì Tuổi = 1
- Tuổi > 0
- Lưu ý: Kiểm tra phi chức năng khi nhập năm sinh lớn hơn năm hiện tại.

### Yêu cầu 4: Tự động xác định số tiền vé (Payment) của khách hàng theo giá vé được công bố trên.

### Yêu cầu 5: Lưu thông tin: Chỉ cho phép lưu thông tin đăng ký mua vé nếu số tiền vé lớn hơn 0.

`;

const TicketBooking = () => {
  const [payment, setPayment] = React.useState(0);

  const [age, setAge] = React.useState(0);

  const onFinish = (values: any) => {
    const { year, classType } = values;

    const currentYear = moment().get('year');
    const yearOfBirth = year.get('year');

    setAge(currentYear - yearOfBirth);

    if (classType === 'BUSINESS') {
      if (currentYear - yearOfBirth > 7) {
        setPayment(4000000);
      } else {
        setPayment(3000000);
      }
    } else {
      if (currentYear - yearOfBirth > 7) {
        setPayment(3000000);
      } else {
        setPayment(700000);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <h3>Ticket Booking Form - Version 1.0</h3>
      <Divider />
      <Form
        form={form}
        name='ticket-booking-form'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ fullname: 'Peter Jackson', address: '38 Yên Bái', idnumber: '201123456', year: moment('1990-01-01'), classType: 'ECONOMY' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item label='Họ và tên' name='fullname' rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}>
          <Input placeholder='Enter your full name' />
        </Form.Item>

        <Form.Item label='Địa chỉ' name='address' rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
          <Input placeholder='Enter your address' />
        </Form.Item>

        <Form.Item label='Số CMND / Hộ chiếu' name='idnumber' rules={[{ required: true, message: 'Vui lòng nhập số CMND hoặc hộ chiếu!' }]}>
          <Input placeholder='Enter your ID number or passport' />
        </Form.Item>

        <Form.Item label='Năm sinh' name='year' rules={[{ required: true, message: 'Vui lòng nhập năm sinh!' }]}>
          <DatePicker picker='year' />
        </Form.Item>

        <Form.Item label='Chọn loại vé' name='classType' rules={[{ required: true, message: 'Vui lòng chọn loại vé!' }]}>
          <Radio.Group>
            <Radio value='ECONOMY'>ECONOMY (Phổ thông)</Radio>
            <Radio value='BUSINESS'>BUSINESS (Thương gia)</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type='primary' htmlType='submit' style={{ minWidth: 120 }}>
            Tính tiền / Xuất vé
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      {age > 0 && (
        <Row>
          <Col span={12}>
            <Descriptions title='Xác nhận xuất vé' column={1} labelStyle={{ fontWeight: '600', minWidth: 200 }}>
              <Descriptions.Item label='Họ và tên'>{form.getFieldValue('fullname')}</Descriptions.Item>
              <Descriptions.Item label='Địa chỉ'>{form.getFieldValue('address')}</Descriptions.Item>
              <Descriptions.Item label='Số CMND / Hộ chiếu'>{form.getFieldValue('idnumber')}</Descriptions.Item>
              <Descriptions.Item label='Tuổi'>{age}</Descriptions.Item>
              <Descriptions.Item label='Loại hành khách'>{age >= 7 ? 'Người lớn' : 'Trẻ em'}</Descriptions.Item>
              <Descriptions.Item label='Loại vé'>{form.getFieldValue('classType')}</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12}>
            <Result
              title={`Tiền vé: ${numeral(payment).format('0,0')} VNĐ`}
              status='success'
              extra={[
                <Button
                  type='default'
                  key='reset'
                  onClick={() => {
                    setAge(0);
                    form.resetFields();
                  }}
                >
                  Tính lại
                </Button>,
                <Button
                  type='primary'
                  key='buy'
                  onClick={() => {
                    message.success('Đặt vé thành công!');
                  }}
                >
                  Đặt vé
                </Button>,
              ]}
            />
          </Col>
        </Row>
      )}

      <Divider />
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </React.Fragment>
  );
};

export default TicketBooking;
