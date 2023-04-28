import React from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Divider, message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const cookies = new Cookies();
    cookies.remove('username');
    cookies.remove('password');

    const { username, password } = values;
    if (username === 'admin' && password === 'Tester@123') {
      message.success('Login success');

      let d = new Date();
      d.setTime(d.getTime() + 20 * 60 * 1000); // 20 minutes

      cookies.set('username', username, { path: '/', expires: d });
      // II.3 Security / Session
      // Mật khẩu không được lưu trong browser cookies
      // cookies.set('password', password, { path: '/', expires: d });
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
    </React.Fragment>
  );
};

export default Login;
