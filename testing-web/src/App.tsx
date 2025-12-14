import './App.css';

import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideMenu from './components/SideMenu';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Login from './pages/Login';
import TicketBooking from './pages/TicketBooking';
import LogOut from './pages/LogOut';
import LifecycleLoginRequirement from './pages/LifecycleLogin/requirements';
import LifecycleLogin from './pages/LifecycleLogin';
import CreateCategory from './pages/CreateCategory';
import CreateCustomer from './pages/CreateCustomer';
import Products from './pages/Products';
import AllProducts from './pages/AllProducts';
import CreateProduct from './pages/CreateProduct';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className='header'>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} items={[{ key: '1', label: 'Home' }]} />
        </Header>
        <Layout>
          <Sider
            width={200}
            className='site-layout-background'
            breakpoint='lg'
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <SideMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Forms</Breadcrumb.Item>
              </Breadcrumb>
              <div className='site-layout-content'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/home' element={<Home />} />

                  <Route path='/online-shop/categories/create' element={<CreateCategory />} />
                  <Route path='/online-shop/customers/create' element={<CreateCustomer />} />
                  <Route path='/lifecycle/login/requirements' element={<LifecycleLoginRequirement />} />
                  <Route path='/lifecycle/login/app' element={<LifecycleLogin />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/logout' element={<LogOut />} />
                  <Route path='/ticket-booking' element={<TicketBooking />} />
                  <Route path='/categories' element={<Categories />} />

                  <Route path='/products' element={<Products />} />
                  <Route path='/products/all' element={<AllProducts />} />
                  <Route path='/products/create' element={<CreateProduct />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
