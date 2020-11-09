import React from 'react'
import { Space, Row, Col } from 'antd';
import { ButtonType } from '../utils/ButtonType';

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
          <ButtonType
              buttonClass='text-white bg-kmcOrange border-none px-8 rounded h-8 hover:bg-orange-500 hover:text-white font-proxiSemiBold'
              text='Log in'
              buttonType='primary'
            />
          {/* // TODO!! Onclick Show Modal */}
          {/* // TODO!! Onclick Show Modal */}
        </Space>

      </Col>
    </Row>
  )
}
