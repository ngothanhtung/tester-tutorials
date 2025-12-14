import { Button, Divider, Form, Input, message } from 'antd';
import axios from 'axios';
import React from 'react';

type Props = {};

export default function CreateCustomer({}: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    let data = JSON.stringify({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
      birthday: values.birthday,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://server.softech.cloud/online-shop/customers',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ0dW5nbnRAc29mdGVjaC52biIsImVtYWlsIjoidHVuZ250QHNvZnRlY2gudm4iLCJzdWIiOjIsImFwcGxpY2F0aW9uIjoiT25saW5lIFNob3AgLSBBUEkiLCJyb2xlcyI6W3siaWQiOjEsIm5hbWUiOiJBZG1pbmlzdHJhdG9ycyJ9XSwiaWF0IjoxNzMyMzY0NTU0LCJleHAiOjE3NjM5MjIxNTR9.IbISfNFsbOtoeTX_MXyrmMhIxDIoqDWkkKigAsgNcck',
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        message.success('Create customer successfully!');
        form.resetFields();
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        message.error('Create customer failed!');
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Create a customer</h3>
      <Divider />
      <Form form={form} onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label='First name' name='firstName' rules={[{ required: true }]} hasFeedback>
          <Input placeholder='Enter first name of customer' />
        </Form.Item>

        <Form.Item label='Last name' name='lastName' rules={[{ required: true }]} hasFeedback>
          <Input placeholder='Enter last name of customer' />
        </Form.Item>

        <Form.Item label='Email' name='email' rules={[{ required: true }, { type: 'email' }]} hasFeedback>
          <Input placeholder='Enter email of customer' />
        </Form.Item>

        <Form.Item label='Phone' name='phoneNumber' rules={[{ required: true }]} hasFeedback>
          <Input placeholder='Enter phone number of customer' />
        </Form.Item>

        <Form.Item label='Address' name='address' rules={[{ required: true }]} hasFeedback>
          <Input placeholder='Enter address of customer' />
        </Form.Item>

        <Form.Item label='Birthday' name='birthday' rules={[{ required: false }]} hasFeedback>
          <Input placeholder='Enter birthday of customer' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' style={{ minWidth: 120 }}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
