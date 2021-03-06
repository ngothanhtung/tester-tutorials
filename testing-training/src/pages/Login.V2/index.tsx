import React from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';

const markdown = `
## Xây dựng mẫu kiểm thử cho form Login sau:

### Giả sử đăng nhập thành công là:
- Username: admin
- Password: Tester2022

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

Nhập đúng username + password sẽ chuyển user vào màn hình.

## II. Testcase

### II.1 UI

- Kiểm tra icon, font size, font style, font color của các text trên màn hình login & Error validations
- Kiểm tra button “Sign In” highlighted khi hover mouse
- Kiểm tra button “Sign In” đổi màu khi mouse down
- Kiểm tra placeholder Username, Password mờ hoặc xoá khi click vào Username, Password textbox
- Kiểm tra placeholder Username, Password bị xoá khi nhập value vào Username, Password textbox
- Kiểm tra Paste keyboard (Ctrl + V) và right click hoạt động với username, password.
- Kiểm tra Copy keyboard (Ctrl + V) và right click hoạt động với username.
- Kiểm tra Copy keyboard (Ctrl + C) bị disable với password, right-click (chức năng Copy) disable.

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
- Username không tự trim dấu cách đầu cuối
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
- Password không tự trim dấu cách đầu cuối
- Check Special character, emoji 🌷👩👨

### II.3 Security / Session

- Password không được lưu trong browser cookies
- Password phải được phân biệt Upper và lower case
- Khi reset/refresh màn hình, password, username phải clear
- User login từ 2 tab browser: Cùng mở 2 tabs, login từng tab. nếu sinh ra 2 session là lỗi
- User login 2 account trên cùng 1 browser, session account login trước phải kết thúc
`;

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const cookies = new Cookies();
    cookies.remove('username');
    cookies.remove('password');

    const { username, password } = values;
    if (username === 'admin' && password === 'Tester2022') {
      message.success('Login success');

      let d = new Date();
      d.setTime(d.getTime() + 20 * 60 * 1000); // 20 minutes

      cookies.set('username', username, { path: '/', expires: d });
      // II.3 Security / Session
      // Password không được lưu trong browser cookies
      // cookies.set('password', password, { path: '/', expires: d });
      navigate('/home');
    } else {
      message.error('Username hoặc Password đã nhập sai');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <React.Fragment>
      <h3>Login Form - Version 2.0</h3>
      <Divider />
      <Form name='login-form' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ username: '', password: '', remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item
          label='Username'
          name='username'
          rules={[
            { required: true, message: 'Username không được để trống' },
            { min: 3, max: 30, message: 'Độ dài Username phải nằm trong khoảng 3 đến 30 ký tự' },
          ]}
        >
          <Input placeholder='Nhập tên đăng nhập' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            { required: true, message: 'Password không được để trống' },
            { min: 6, max: 10, message: 'Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự' },
          ]}
        >
          <Input.Password placeholder='Nhập mật khẩu' />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' style={{ minWidth: 120 }}>
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Divider></Divider>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </React.Fragment>
  );
};

export default Login;
