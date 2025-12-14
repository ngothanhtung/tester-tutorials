import React from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const markdown = `
## Xây dựng mẫu kiểm thử cho form Login sau:

### I. Yêu cầu chung về các thành phần trong giao diện:

- Tên đăng nhập: TextBox / TextInput
- Mật khẩu: TextBox / TextInput (Secure Entry)
- CheckBox "Ghi nhớ thông tin tài khoản"
- Button "Đăng nhập"
- Link "Quên mật khẩu", liên kết đến màn hình quên mật khẩu (https://aptech-tester.web.app/forgot-password)
- Link "Đăng ký", liên kết đến màn hình đăng ký (https://aptech-tester.web.app/register)

### II. Thông tin đăng nhập thành công là:
- Username: admin
- Password: Tester@123

### III. Thông tin về ràng buộc dữ liệu:

- Username: Không được để trống và có độ dài trong khoảng 3-30 ký tự.
  - Invalid messages:
    - Username không được để trống.
    - Độ dài Username phải nằm trong khoảng 3 đến 30 ký tự.
- Password: Không được để trống và có độ dài trong khoảng 6-10 ký tự
  - Invalid messages:
    - Password không được để trống.
    - Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự.

### IV. Khi login thành công / thất bại:
- Nhập đúng username + password sẽ chuyển user vào màn hình chính.
- Nhập sai username + password sẽ hiển thị thông báo lỗi "Tên đăng nhập hoặc Mật khẩu đã nhập sai".
`;

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const cookies = new Cookies();
    cookies.remove('username');
    cookies.remove('password');

    const { username, password } = values;

    const response = await axios.post('https://server.softech.cloud/auth/login', {
      username: username,
      password: password,
    });

    if (response.status === 200 || response.status === 201) {
      message.success('Login success');

      let d = new Date();
      d.setTime(d.getTime() + 20 * 60 * 1000); // 20 minutes

      cookies.set('username', username, { path: '/', expires: d });
      // II.3 Security / Session
      // Mật khẩu không được lưu trong browser cookies
      cookies.set('password', password, { path: '/', expires: d });
      navigate('/home');
    } else {
      message.error('Tên đăng nhập hoặc Mật khẩu đã nhập sai');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <React.Fragment>
      <h3>Login Form</h3>
      <Divider />
      <Form name='login-form' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ username: '', password: '', remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item
          label='Tên đăng nhập'
          name='username'
          rules={[
            { required: true, message: 'Tên đăng nhập không được để trống' },
            { min: 3, max: 30, message: 'Độ dài tên đăng nhập phải nằm trong khoảng 3 đến 30 ký tự' },
          ]}
        >
          <Input placeholder='Nhập tên đăng nhập' autoComplete='off' />
        </Form.Item>

        <Form.Item
          label='Mật khẩu'
          name='password'
          rules={[
            { required: true, message: 'Mật khẩu không được để trống' },
            { min: 6, max: 10, message: 'Độ dài mật khẩu phải nằm trong khoảng 6 đến 10 ký tự' },
          ]}
        >
          <Input.Password placeholder='Nhập mật khẩu' autoComplete='off' />
        </Form.Item>

        <Form.Item name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Ghi nhớ tài khoản</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' style={{ width: 120 }}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>

      <Divider></Divider>
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </React.Fragment>
  );
};

export default Login;
