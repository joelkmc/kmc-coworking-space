import React from 'react'
import { Layout, Col, Row, Space, Dropdown, Avatar, Menu } from 'antd'
import { Link } from 'react-router-dom'

import { UserOutlined, DownOutlined, CalendarOutlined, AppstoreOutlined, SoundOutlined } from '@ant-design/icons';

import passportIcon from '../assets/images/passport-pin.svg';
import passportLogo from '../assets/images/passport-logo.svg';

const { Content, Sider } = Layout;

interface HubLayoutProps {
  navKey: string;
}

const HubLayout: React.FC<HubLayoutProps> = ({ children, navKey }) => {

  const profileMenu = () => {
    return(
      <Menu mode="inline">
        <Menu.Item className='px-10'>
          Profile
        </Menu.Item>
        <Menu.Item className='px-10'>
          Logout
        </Menu.Item>
      </Menu>
    )
  }
  

  return (
    <Layout style={{ background: '#F5F1F1' }}>

      {/* Side Navigation */}
      <Sider
        className='hidden antdSm:block fixed z-30'
        collapsible
        trigger={ null }
        breakpoint="lg"
        collapsedWidth="80"
        width='250'
        style={{
          height: '100vh',
          left: 0,
          background: 'transparent'
        }}
      >
        {/* Side Navigation Menu */}
        <Menu 
          mode='inline' 
          style={{ background: '#333' }} 
          className='text-white h-screen pt-6 hidden antdSm:block'
          defaultSelectedKeys={[navKey]}
        >
          <div className="flex w-full pb-2 pt-8 px-5 mb-6">

            <img src={ passportIcon } alt={ passportIcon } className='w-auto' style={{ height: '50px' }}/>

            
            <img src={ passportLogo } alt={ passportLogo } className='w-4/5 pl-1 hidden antdLg:block'/>
          </div>
          <Menu.Item 
            key='1'
            className='font-proxiSemiBold'
            style={{ paddingLeft: '30px' }} 
            icon={ <AppstoreOutlined style={{ fontSize: '20px' }} /> }
          >
            <Link to='/hub' className='default__sider-link hover:text-kmcOrange'>Dashboard</Link>
          </Menu.Item>
          <Menu.Item 
            key='2'
            className='font-proxiSemiBold'
            style={{ paddingLeft: '30px' }} 
            icon={ <CalendarOutlined style={{ fontSize: '20px' }} /> }
          >
            <Link to='/hub/bookings' className='default__sider-link hover:text-kmcOrange'>Bookings</Link>
          </Menu.Item>
          <Menu.Item 
            key='3'
            className='font-proxiSemiBold'
            style={{ paddingLeft: '30px' }} 
            icon={ <SoundOutlined style={{ fontSize: '20px' }} /> }
          >
            Events
          </Menu.Item>
        </Menu>
      </Sider>

    {/* Bottom Navigation Menu */}
    <Menu 
      mode='horizontal' 
      style={{ background: '#333' }} 
      className='text-white w-full bottom-0 antdSm:hidden fixed flex justify-center border-none z-20'
    >
      <Menu.Item 
        className='font-proxiSemiBold text-base px-3 w-100 m-0'
        icon={ <AppstoreOutlined style={{ fontSize: '20px' }} /> }
      />
      <Menu.Item 
        className='font-proxiSemiBold text-base px-3'
        icon={ <CalendarOutlined style={{ fontSize: '20px' }} /> }
      />
      <Menu.Item 
        className='font-proxiSemiBold text-base px-3'
        icon={ <SoundOutlined style={{ fontSize: '20px' }} /> }
      />
    </Menu>

      <Layout>

        {/* Header Navigation */}
        <Menu className='bg-white flex justify-end items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 fixed w-full z-20' style={{ height: '60px' }}>
        
          <Space>
            <Avatar icon={ <UserOutlined /> } />
            <p>Firstname Lastname</p>
            <Dropdown overlay={ profileMenu } className='cursor-pointer'>
              <DownOutlined style={{ fontSize:10 }} />
            </Dropdown>
          </Space>
          
        </Menu>

        {/* Main Content */}
        <Content className='antdSm:ml-20 antdLg:ml-56' style={{ marginTop: '60px' }}>
          <Row>
            <Col span={23} md={22} lg={20} className='mx-auto py-10'>
              { children }
            </Col>
          </Row>
        </Content>

      </Layout>

    </Layout>
  );
}

export default HubLayout;