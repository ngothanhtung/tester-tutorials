import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import { Breadcrumb, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>Header</Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Forms</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
          </Breadcrumb>
          <div className='site-layout-content'>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='login' element={<Login />} />
            </Routes>
          </div>
        </Content>

        <Footer>Testing training</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
