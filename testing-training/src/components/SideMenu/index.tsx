import { Menu, MenuProps } from 'antd';
import React from 'react';
import { UserOutlined, SendOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type Props = {};

const menuItems: MenuProps['items'] = [
  {
    key: 'login',
    label: 'Login',
    icon: <UserOutlined />,
  },
  {
    key: 'ticket-booking',
    label: 'Ticket booking',
    icon: <SendOutlined />,
  },
];

function SideMenu({}: Props) {
  const navigate = useNavigate();
  return (
    <Menu
      mode='inline'
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['login']}
      style={{ minHeight: '100%', borderRight: 0 }}
      items={menuItems}
      onClick={(info) => {
        console.log(info);
        navigate(`/${info.key}`);
      }}
    />
  );
}

export default SideMenu;
