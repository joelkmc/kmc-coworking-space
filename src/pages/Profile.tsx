import React from 'react'
import HubLayout from '../components/HubLayout';
import { Link } from 'react-router-dom'
import { Card, Avatar, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ButtonType } from '../utils/ButtonType';



const Profile: React.FC = () => {
    return (
      <HubLayout navKey=''>
        <div className="flex flex-col lg:flex-row justify-center w-full">

          <figure className='w-full lg:w-1/3 text-center'>
            <Avatar icon={ <UserOutlined /> } shape='square' size={ 220 } className='rounded' />
            <figcaption>
              <p className='font-proxiSemiBold text-lg my-2'>Firstname Lastname</p>
            </figcaption>
            <ButtonType buttonType='primary'buttonClass='font-proxiSemiBold'>
              <Link to='/hub/account/profile/edit'>Edit Profile</Link>
            </ButtonType>
          </figure>

          <Card className='p-3 w-full lg:w-2/3 rounded mt-3 lg:m-0'>
            <Form>
              {/* Email Address */}
              <Form.Item>
                <label htmlFor="startDate" className='font-proxiSemiBold'>Email Address</label>
                <Input name='email' disabled value='sample@email.com' />
              </Form.Item>
              {/* Firstname and Lastname */}
              <div className="flex flex-col sm:flex-row w-full pt-4">
                <div className="w-full sm:w-1/2">
                  <Form.Item className='ant-col-24 sm:pr-2'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>First Name</label>
                    <Input name='firstName' className='mt-1' value='Firstname'  disabled/>
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/2">
                  <Form.Item className='ant-col-24 sm:pl-2'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Last Name</label>
                    <Input name='lastName' className='mt-1' value='Lastname'  disabled/>
                  </Form.Item>
                </div>
              </div>
              {/* Contact, Company, Position */}
              <div className="flex flex-col sm:flex-row w-full pt-4">
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 sm:pr-2'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Contact No.</label>
                    <Input name='contactNum' className='mt-1' value='09123456789'  disabled/>
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 sm:pl-2'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Company</label>
                    <Input name='company' className='mt-1' value='Company ABC'  disabled/>
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 sm:pl-2'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Position</label>
                    <Input name='position' className='mt-1' value='Position ABC' disabled/>
                  </Form.Item>
                </div>
              </div>
            </Form>
          </Card>

        </div>
      </HubLayout>
    );
}

export default Profile; 