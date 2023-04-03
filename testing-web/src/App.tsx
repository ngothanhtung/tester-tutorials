import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import LoginV2 from './pages/Login.V2';
import { Breadcrumb, Layout, Menu } from 'antd';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import TicketBooking from './pages/TicketBooking';
import Categories from './pages/Categories';
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
          <Sider width={200} className='site-layout-background'>
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
                  <Route path='/login' element={<Login />} />
                  <Route path='/login/V2' element={<LoginV2 />} />
                  <Route path='/ticket-booking' element={<TicketBooking />} />
                  <Route path='/categories' element={<Categories />} />
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
