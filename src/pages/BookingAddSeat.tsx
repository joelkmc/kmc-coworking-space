import React, { useContext } from 'react';
import { BookingsContext } from '../context/BookingsContext';
import { useParams } from 'react-router-dom';
import { Card, Avatar, Divider } from 'antd';

import HubLayout from '../components/HubLayout';
import { AddSeatForm } from '../components/booking/AddSeatForm';

interface bookingIdParams {
  bookingId: string | undefined;
}

export const BookingAddSeat: React.FC = () => {

  const bookings = useContext(BookingsContext)
  
  const { bookingId } = useParams<bookingIdParams>();

  // ***************************************** \\
  // TODO!! convert this to a reducer function \\
  // ***************************************** \\
  const selectedBooking = bookings.filter(booking => {
    return booking.id === bookingId
  })

  return (
    <HubLayout navKey='2'>
      <Card className='p-8 rounded'>
        <h2 className='text-xl font-proxiExtraBold'>Booking Number:  
          <span className="text-kmcOrange">
            { ` ${selectedBooking[0]?.bookingNumber}` }
          </span>
        </h2>
        <h3 className="text-xl font-proxiSemiBold">Please add your seat owner (1)</h3>
        <p>Check the details properly before submitting to avoid conflicts</p>
        <Avatar size={ 40 } icon={ <p className='text-black'>1</p> } className='mt-3' />

        <AddSeatForm/>
        <Divider />
      </Card>
    </HubLayout>
  );
  

}