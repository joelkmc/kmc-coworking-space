import React from 'react'
import useModalState from '../hooks/useModalState';
import HubLayout from '../components/HubLayout';
import { Card, Form, Input, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { ButtonType } from '../utils/ButtonType';
import { ProfilePhotoModal } from '../components/profile/ProfilePhotoModal';

const ProfileEdit: React.FC = () => {

  return (
    <HubLayout navKey=''>
      <div className="flex flex-col items-center">
        <Card className='p-3 w-full lg:w-2/4 rounded mt-3 lg:m-0 text-center'> 
          <ProfilePhotoModal /> 
          
        </Card>
        <Card className='p-3 w-full lg:w-2/4 rounded mt-4'>
            <Form>

              {/* Email Address */}
              <Form.Item>
                <label htmlFor="startDate" className='font-proxiSemiBold'>Email Address</label>
                <Input name='email' value='sample@email.com' className='px-1' />
              </Form.Item>

              {/* Firstname and Lastname */}
              <div className="flex flex-col sm:flex-row w-full pt-4">
                <div className="w-full sm:w-1/2">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>First Name</label>
                    <Input name='firstName' className='mt-1' value='Firstname' />
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/2">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Last Name</label>
                    <Input name='lastName' className='mt-1' value='Lastname' />
                  </Form.Item>
                </div>
              </div>

              {/* Contact, Company, Position */}
              <div className="flex flex-col sm:flex-row w-full pt-4">
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Contact No.</label>
                    <Input name='contactNum' className='mt-1' value='09123456789' />
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Company</label>
                    <Input name='company' className='mt-1' value='Company ABC' />
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/3">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="firstName" className='font-proxiSemiBold'>Position</label>
                    <Input name='position' className='mt-1' value='Position ABC'/>
                  </Form.Item>
                </div>
              </div>

              {/* Address */}
              <Form.Item className='ant-col-24 px-1'>
                <label htmlFor="address" className='font-proxiSemiBold'>Street Address</label>
                <Input name='address' className='mt-1' value='address' />
              </Form.Item>
              <div className="flex flex-col sm:flex-row w-full pt-4">
                <div className="w-full sm:w-1/4">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="city" className='font-proxiSemiBold'>City</label>
                    <Input name='city' className='mt-1' value='city' />
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/4">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="state" className='font-proxiSemiBold'>State</label>
                    <Input name='state' className='mt-1' value='State'/>
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/4">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="country" className='font-proxiSemiBold'>Country</label>
                    <Input name='country' className='mt-1' value='country'/>
                  </Form.Item>
                </div>
                <div className="w-full sm:w-1/4">
                  <Form.Item className='ant-col-24 px-1'>
                    <label htmlFor="zipCode" className='font-proxiSemiBold'>Zip Code</label>
                    <Input name='zipCode' className='mt-1' value='zip code'/>
                  </Form.Item>
                </div>
              </div>

            </Form>
          </Card>
        </div>

      </HubLayout>

  );
}

export default ProfileEdit;