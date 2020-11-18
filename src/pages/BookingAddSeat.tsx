import React, { useContext, useEffect } from 'react';
import { BookingsContext } from '../context/BookingsContext';
import { Redirect, useParams } from 'react-router-dom';
import { Card, Avatar, Form, Input, Divider } from 'antd';

import HubLayout from '../components/HubLayout';
import { ButtonType } from '../utils/ButtonType';
import { BookingSingle } from './BookingSingle';

interface bookingIdParams {
  bookingId: string | undefined;
}

export const BookingAddSeat: React.FC = () => {

  const { bookingId } = useParams<bookingIdParams>();

  const bookings = useContext(BookingsContext)
  
  // TODO!! convert this to a reducer function
  const selectedBooking = bookings.filter(booking => {
    return booking.id === bookingId
  })

  return (
    <HubLayout navKey=''>
      <Card className='p-8 rounded'>
        <h2 className='text-xl font-proxiExtraBold'>Booking Number:  
          <span className="text-kmcOrange">
            { ` ${selectedBooking[0]?.bookingNumber}` }
          </span>
        </h2>
        <h3 className="text-xl font-proxiSemiBold">Please add your seat owner (1)</h3>
        <p>Check the details properly before submitting to avoid conflicts</p>
        <Avatar size={ 40 } icon={ <p className='text-black'>1</p> } className='mt-3' />

        {/* Form */}
        <Form>
          <div className='w-full flex flex-wrap mt-4'>
            <Form.Item className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
              <Input name='firstname' placeholder='First Name'className='rounded-none' />
            </Form.Item>
            <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
              <Input name='lastname' placeholder='Last Name' className='rounded-none' />
            </Form.Item>
            <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
              <Input name='email' placeholder='Email Address' className='rounded-none' />
            </Form.Item>
            <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
              <Input name='contactNum' placeholder='Contact No.' className='rounded-none' />
            </Form.Item>
            <Form.Item  className='w-full mb-3 md:mb-4 lg:mb-5 antdSm:w-1/2 antdLg:w-1/5 px-1 antdLg:px-0'>
              <Input name='position' placeholder='Position' className='rounded-none' />
            </Form.Item>
            <Form.Item  className='w-full my-0'>
              <ButtonType buttonType='primary' text='Add Seat Owner' buttonClass='w-full antdLg:w-auto' />
            </Form.Item>
          </div>
        </Form>
        <Divider />

      </Card>
    </HubLayout>
  );
  

}