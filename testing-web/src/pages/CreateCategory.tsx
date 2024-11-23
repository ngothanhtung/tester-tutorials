import { Button, Divider, Form, Input, message } from 'antd';
import axios from 'axios';
import React from 'react';

type Props = {};

export default function CreateCategory({}: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    let data = JSON.stringify({
      name: values.name,
      description: values.description,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://server.aptech.io/online-shop/categories',
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
        message.success('Create category successfully!');
        form.resetFields();
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        message.error('Create category failed!');
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Create a category</h3>
      <Divider />
      <Form form={form} onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please enter name of category!' }]} hasFeedback>
          <Input placeholder='Enter name of category' />
        </Form.Item>

        <Form.Item label='Description' name='description'>
          <Input placeholder='Enter description of category' />
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
