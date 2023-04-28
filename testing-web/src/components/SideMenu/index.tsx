import { Menu, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

import { HomeOutlined, UserOutlined } from '@ant-design/icons';

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
  // {
  //   key: '/ticket-booking',
  //   label: 'Ticket booking',
  //   icon: <SendOutlined />,
  // },
  // {
  //   key: '/categories',
  //   label: 'Categories',
  //   icon: <AppstoreOutlined />,
  // },
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
