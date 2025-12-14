import React from 'react';
import axios from 'axios';
import numeral from 'numeral';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type Props = {};

interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
}

export default function AllProducts({}: Props) {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://server.softech.cloud/online-shop/products');
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const trimName = (name: string) => {
    if (name.length > 20) {
      return name.slice(0, 20) + '...';
    }
    return name;
  };

  const columns: ColumnsType<Product> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => <span style={{ fontWeight: 'bold' }}>{trimName(name)}</span>,
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      width: 200,
      render: (price: number) => numeral(price).format('0,0$'),
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
      align: 'right',
      width: 120,
      render: (discount: number) => <span style={{ color: discount > 50 ? 'red' : 'blue' }}>{numeral(discount).format('0,0')}%</span>,
    },
    {
      title: 'Tồn kho',
      dataIndex: 'stock',
      key: 'stock',
      align: 'right',
      width: 120,
      render: (stock: number) => (
        <span>
          {stock} {stock <= 70 && '🔥'}
        </span>
      ),
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <div>
      <h1>Danh sách hàng hóa</h1>
      <Table
        columns={columns}
        dataSource={products}
        rowKey='id'
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total) => `Tổng số ${total} sản phẩm`,
        }}
      />
    </div>
  );
}
