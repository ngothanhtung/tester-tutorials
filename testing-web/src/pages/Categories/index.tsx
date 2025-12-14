import 'moment/locale/vi';
import 'numeral/locales/vi';

import { Button, Divider, Form, Input, message } from 'antd';
import axios from 'axios';
import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import ReactMarkdown from 'react-markdown';

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

## Nhập vào danh mục sản phẩm:
### Nhập liệu:
- Name: required, unique
  - Invalida messages
    - Name (required): Vui lòng nhập tên danh mục!
    - Name (unique): Tên danh mục đã tồn tại!
- Description: allow null


### Đối chiếu với Database (Nếu đã học phần Database):

- Name: required, unique
- Description: allow null

### Đối chiếu với API (Nếu đã học phần API):

- Name: required, unique
- Description: allow null

`;

const Categories = () => {
  const onFinish = (values: any) => {
    const { name, description } = values;

    console.log({ name, description });

    axios
      .post('https://server.softech.cloud/auth/login', {
        username: 'tungnt@softech.vn',
        password: '123456789',
      })
      .then((response) => {
        console.log(response.data.access_token);
        axios
          .post(
            'https://server.softech.cloud/online-shop/categories',
            { name, description },
            {
              headers: {
                Authorization: 'Bearer ' + response.data.access_token,
              },
            },
          )
          .then((response) => {
            console.log(response.data.message);
            message.info('Tạo mới thành công');
          })
          .catch((err) => {
            if (err.code === 'ERR_BAD_REQUEST') {
              message.error(err.response.data.message);
            }
          });
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();

  return (
    <React.Fragment>
      <h3>Category Form - Version 1.0</h3>
      <Divider />
      <Form form={form} name='category-create-form' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ name: 'Phones', description: 'Mô tả danh mục sản phẩm' }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item label='Tên danh mục' name='name' rules={[{ required: true, message: 'Vui lòng nhập tên danh mục!' }]}>
          <Input placeholder='Enter name of categoy' />
        </Form.Item>

        <Form.Item label='Mô tả' name='description'>
          <Input placeholder='Enter description of category' />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' style={{ minWidth: 120 }}>
            Lưu thông tin
          </Button>
        </Form.Item>
      </Form>

      <Divider />
      <ReactMarkdown children={markdown}></ReactMarkdown>
    </React.Fragment>
  );
};

export default Categories;
