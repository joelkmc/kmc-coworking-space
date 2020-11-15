import React from 'react'
import { Menu, Space, Avatar, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { DownOutlined, UserOutlined } from '@ant-design/icons'


export const TopNavItems: React.FC = () => {

  const profileMenu = (
    <Menu>
      <Menu.Item className='px-10'>
        <Link to='/hub/account/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item className='px-10'>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <Space>
      <Avatar icon={ <UserOutlined /> } />
      <p>Firstname Lastname</p>
      <Dropdown overlay={ profileMenu } className='cursor-pointer'>
        <DownOutlined style={{ fontSize:10 }} />
      </Dropdown>
    </Space>
  )
}