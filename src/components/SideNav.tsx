import React from 'react'
import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'

import { AppstoreOutlined, CalendarOutlined, SoundOutlined } from '@ant-design/icons'
import passportIcon from '../assets/images/passport-pin.svg';
import passportLogo from '../assets/images/passport-logo.svg';

const { Sider } = Layout;

interface SideNavProps {
  navKey: string;
}


export const SideNav: React.FC<SideNavProps> = ({ navKey }) => {

  // console.log(key)
  return (
    <>
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
    </>
  );
}