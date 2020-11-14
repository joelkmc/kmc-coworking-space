import React from 'react'
import { Avatar, Menu, Space, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';


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

export const HeaderNav: React.FC = () => {
    return (
      <Menu className='bg-white flex justify-end items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 fixed w-full z-20' style={{ height: '60px' }}>
        
        <Space>
          <Avatar icon={ <UserOutlined /> } />
          <p>Firstname Lastname</p>
          <Dropdown overlay={ profileMenu } className='cursor-pointer'>
            <DownOutlined style={{ fontSize:10 }} />
          </Dropdown>
        </Space>
        
      </Menu>
    );
}