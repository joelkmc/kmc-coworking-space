import React from 'react'
import { Space, Row, Col, Input, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { ButtonType } from '../../utils/ButtonType';
import useModalState from '../../hooks/useModalState';
import { ModalComp } from '../../utils/ModalComp'

import CompanyLogo from '../../assets/images/CompanyLogo.webp'

const { Password } = Input

const Navigation = () => {

  // Login Modal State and Method
  const [ loginModalState, handleLoginModalClose, handleLoginModalOpen ] = useModalState(false);

  return (
    <Row className='h-full'>
      <Col span={23} md={20} lg={16} className='flex w-full justify-between items-center px-4 mx-auto'>

        <Space>         
          <img 
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
            handleClick={ handleLoginModalOpen }
          />

        </Space>

      </Col>
      
      {/* Login Modal */}
      <ModalComp
        modalState={ loginModalState }
        handleClose= { handleLoginModalClose }
        childComp={
          <>
            <h3 className='font-proxiExtraBold text-2xl justify-self-start leading-6'>
              I'm a returning customer
            </h3>
            <p>To continue, please enter your email address and passord</p>

            <Form className='loginForm mt-5'>
              {/* Email */}
              <Form.Item>
                <label htmlFor="email" className='font-proxiSemiBold'>Email:</label>
                <Input 
                  placeholder="Email Address" 
                  type='email'
                  name='email'
                />
              </Form.Item>
              <Form.Item>
                {/* Password */}
                <label htmlFor="email" className='font-proxiSemiBold'>Password:</label>
                <Password
                  placeholder="Password"
                  name='password'
                  type='password'
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item>

              {/* Login Button */}
              <ButtonType
                buttonType='primary'
                buttonClass='w-full mt-3'
                text='Log in'
              />
            </Form>

            {/* forgot password link */}
            <ButtonType
              buttonType='link'
              buttonClass='p-0 mt-3'
              text='Forgot Password?'
            />
          </>
        }
      />

    </Row>
  )
}

export default Navigation;