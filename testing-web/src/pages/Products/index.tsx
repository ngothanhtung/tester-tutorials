import React from 'react';
import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://server.aptech.io/online-shop/products',
  headers: {},
};

type Props = {};

export default function Products({}: Props) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .request(config)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td style={{ fontWeight: '700', color: 'red' }}>{product.name}</td>
              <td style={{ textAlign: 'right' }}>{product.price}</td>
              <td style={{ textAlign: 'right' }}>{product.stock}</td>
              <td style={{ textAlign: 'right' }}>{product.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
