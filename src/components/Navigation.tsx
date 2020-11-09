import React, { useState } from 'react'
import { Space, Row, Col, Input, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { ButtonType } from '../utils/ButtonType';
import useModalState from '../hooks/useModalState';
import useInputState from '../hooks/useInputState';

import CompanyLogo from '../assets/images/CompanyLogo.webp'

const { Password } = Input

export default function Navigation() {

  const [ modalState, handleClose, handleOpen ] = useModalState(false);

  return (
    <Row className='h-full'>
      <Col span={23} md={20} lg={16} className='flex w-full justify-between items-center px-4 mx-auto'>

        <Space>         <img 
            src={CompanyLogo} 
            alt='KMC-Logo' 
            className='w-auto' 
            style={{height: '30px'}}
          />
        </Space>
        
        <Space>
          <ButtonType
              buttonClass='text-white bg-kmcOrange border-none px-8 rounded h-8 hover:bg-orange-500 hover:text-white font-proxiSemiBold '
              text='Log in'
              buttonType='primary'
              handleClick={ handleOpen }
            />
        </Space>

        {/* Modal */}
        <Modal
          centered
          visible={ modalState }
          closeIcon='Close'
          className='loginModal'
          footer={ null }
          maskClosable={ true }
          onCancel={ handleClose }
          bodyStyle={{ padding: '2.6rem 1.5rem' }}
        >
          <h3 className='font-proxiExtraBold text-2xl justify-self-start leading-6'>
            I'm a returning customer
          </h3>
          <p>To continue, please enter your email address and passord</p>

          <form className='loginForm mt-5' onSubmit={ e => e.preventDefault() }>
            <Space direction="vertical" className='w-full'>
              {/* Email */}
              <Input 
                placeholder="Email Address" 
                type='email'
                name='email'
              />

              {/* Password */}
              <Password
                placeholder="Password"
                name='password'
                type='password'
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </Space>

            {/* Login Button */}
            <ButtonType
              buttonType='primary'
              buttonClass='w-full mt-5'
              text='Log in'
            />
          </form>

          {/* forgot password link */}
          <ButtonType
            buttonType='link'
            buttonClass='p-0 mt-3'
            text='Forgot Password?'
          />

        </Modal>

      </Col>
    </Row>
  )
}
