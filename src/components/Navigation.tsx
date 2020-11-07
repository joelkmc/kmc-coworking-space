import React from 'react'
import { Space, Button, Row, Col } from 'antd';
import CompanyLogo from '../assets/images/CompanyLogo.webp'

export default function Navigation() {
  return (
    <Row className='h-full'>
      <Col span={16} className='flex w-full justify-between items-center px-4 mx-auto'>

        <Space>
          <img 
            src={CompanyLogo} 
            alt='KMC-Logo' 
            className='w-auto' 
            style={{height: '30px'}}
          />
        </Space>
        
        <Space>
          {/* // TODO!! Onclick Show Modal */}
          {/* // TODO!! Onclick Show Modal */}
          <Button
            className='text-white bg-kmcOrange border-none px-8 rounded h-8 hover:bg-orange-500 hover:text-white'
            >
            Login
          </Button>
          {/* // TODO!! Onclick Show Modal */}
          {/* // TODO!! Onclick Show Modal */}
        </Space>

      </Col>
    </Row>
  )
}
