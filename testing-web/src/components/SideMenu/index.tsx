import React from 'react';
import { Menu, MenuProps } from 'antd';
import { UserOutlined, SendOutlined, HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems: MenuProps['items'] = [
  {
    key: '/home',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: '/login',
    label: 'Login',
    icon: <UserOutlined />,
  },
  {
    key: '/login/v2',
    label: 'Login (V2)',
    icon: <UserOutlined />,
  },
  {
    key: '/ticket-booking',
    label: 'Ticket booking',
    icon: <SendOutlined />,
  },
  {
    key: '/categories',
    label: 'Categories',
    icon: <AppstoreOutlined />,
  },
];

function SideMenu() {
  const location = useLocation();

  const navigate = useNavigate();
  return (
    <Menu
      mode='inline'
      selectedKeys={[location.pathname]}
      style={{ minHeight: '100%', borderRight: 0 }}
      items={menuItems}
      onClick={(info) => {
        navigate(`${info.key}`);
      }}
    />
  );
}

export default SideMenu;
