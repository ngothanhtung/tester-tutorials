import { Button, Divider, Form, Input, message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const LifecycleLogin = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const cookies = new Cookies();
      cookies.remove('username');
      cookies.remove('password');

      const { username, password } = values;

      await axios.post('https://server.aptech.io/auth/login', {
        username: username,
        password: password,
      });

      let d = new Date();
      d.setTime(d.getTime() + 20 * 60 * 1000); // 20 minutes

      cookies.set('username', username, { path: '/', expires: d });
      // II.3 Security / Session
      // Mật khẩu không được lưu trong browser cookies
      cookies.set('password', password, { path: '/', expires: d });

      message.success('Đăng nhập thành công');

      // delay 2000ms
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate('/home');
    } catch (error) {
      message.error('Đăng nhập thất bại');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = React.useState(false);

  // Function to check if form has errors
  const checkFormValidity = React.useCallback(() => {
    const hasErrors = form.getFieldsError().some((field) => field.errors.length > 0);

    const isTouched = form.isFieldsTouched(true); // Check if any field has been interacted with
    setIsFormValid(isTouched && !hasErrors);
  }, [form]);

  // Trigger the validation check when the form values change
  React.useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]); // This listens to field validation and touches

  return (
    <React.Fragment>
      <h3>Đăng nhập hệ thống</h3>
      <Divider />
      <Form form={form} name='login-form' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ username: '', password: '' }} onFinish={onFinish} onFinishFailed={onFinishFailed} onFieldsChange={checkFormValidity}>
        <Form.Item
          label='Email'
          name='username'
          hasFeedback={true}
          rules={[
            { required: true, message: 'Email không hợp lệ' },
            { type: 'email', message: 'Email không hợp lệ' },
          ]}
        >
          <Input placeholder='Nhập email của bạn' autoFocus={true} />
        </Form.Item>

        <Form.Item
          label='Mật khẩu'
          name='password'
          hasFeedback={true}
          rules={[
            { required: true, message: 'Mật khẩu phải có ít nhất 8 ký tự và tối đa 30 ký tự.' },
            { min: 8, max: 30, message: 'Mật khẩu phải có ít nhất 8 ký tự và tối đa 30 ký tự.' },
          ]}
        >
          <Input.Password placeholder='Nhập mật khẩu của bạn' autoComplete='off' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' style={{ width: 120 }} disabled={!isFormValid}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default LifecycleLogin;
