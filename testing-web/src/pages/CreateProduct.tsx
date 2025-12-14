import React from 'react';
import { Form, Input, InputNumber, Button, Select, message } from 'antd';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

interface Supplier {
  id: number;
  name: string;
}

interface ProductFormValues {
  name: string;
  price: number;
  discount: number;
  stock: number;
  description?: string;
  categoryId: number;
  supplierId: number;
}

export default function CreateProduct() {
  const [form] = Form.useForm();
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [suppliers, setSuppliers] = React.useState<Supplier[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, suppliersRes] = await Promise.all([axios.get('https://server.softech.cloud/online-shop/categories'), axios.get('https://server.softech.cloud/online-shop/suppliers')]);

        // Sắp xếp categories theo name A-Z
        const sortedCategories = categoriesRes.data.sort((a: Category, b: Category) => a.name.localeCompare(b.name));
        // Sắp xếp suppliers theo name A-Z
        const sortedSuppliers = suppliersRes.data.sort((a: Supplier, b: Supplier) => a.name.localeCompare(b.name));

        setCategories(sortedCategories);
        setSuppliers(sortedSuppliers);
      } catch (error) {
        console.error('Error fetching data:', error);
        message.error('Không thể tải dữ liệu danh mục và nhà cung cấp');
      }
    };

    fetchData();
  }, []);

  const onFinish = async (values: ProductFormValues) => {
    setLoading(true);
    try {
      const response = await axios.post('https://server.softech.cloud/online-shop/products', values);
      console.log('Product created:', response.data);
      message.success('Tạo sản phẩm thành công!');
      form.resetFields();
    } catch (error) {
      console.error('Error creating product:', error);
      message.error('Tạo sản phẩm thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4>Tạo sản phẩm</h4>
      <hr />
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        initialValues={{
          discount: 0,
          stock: 1,
        }}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label='Tên sản phẩm' name='name' rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}>
          <Input placeholder='Nhập tên sản phẩm' />
        </Form.Item>

        <Form.Item
          label='Giá'
          name='price'
          rules={[
            { required: true, message: 'Vui lòng nhập giá!' },
            { type: 'number', min: 0.01, message: 'Giá phải lớn hơn 0!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Nhập giá' formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} parser={(value) => value!.replace(/\$\s?|(,*)/g, '')} />
        </Form.Item>

        <Form.Item
          label='Giảm giá (%)'
          name='discount'
          rules={[
            { required: true, message: 'Vui lòng nhập giảm giá!' },
            { type: 'number', min: 0, message: 'Giảm giá phải >= 0!' },
            { type: 'number', max: 90, message: 'Giảm giá phải <= 90!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Nhập % giảm giá' min={0} max={90} />
        </Form.Item>

        <Form.Item
          label='Tồn kho'
          name='stock'
          rules={[
            { required: true, message: 'Vui lòng nhập số lượng tồn kho!' },
            { type: 'number', min: 0, message: 'Tồn kho phải >= 0!' },
          ]}
        >
          <InputNumber style={{ width: '100%' }} placeholder='Nhập số lượng tồn kho' min={0} />
        </Form.Item>

        <Form.Item label='Mô tả' name='description'>
          <Input.TextArea rows={4} placeholder='Nhập mô tả sản phẩm' />
        </Form.Item>

        <Form.Item label='Danh mục' name='categoryId' rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}>
          <Select placeholder='Chọn danh mục' loading={categories.length === 0}>
            {categories.map((category) => (
              <Select.Option key={category.id} value={category.id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label='Nhà cung cấp' name='supplierId' rules={[{ required: true, message: 'Vui lòng chọn nhà cung cấp!' }]}>
          <Select placeholder='Chọn nhà cung cấp' loading={suppliers.length === 0}>
            {suppliers.map((supplier) => (
              <Select.Option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading}>
            Tạo sản phẩm
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
            Đặt lại
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
