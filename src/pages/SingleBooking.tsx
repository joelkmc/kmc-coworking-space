import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Avatar } from 'antd';

import { bookingData } from '../assets/data/DataHub'
import HubLayout from '../components/HubLayout';

interface bookingIdParams {
  bookingId: string | undefined;
}

interface bookingStateParams {
  id: string | undefined;
  plan: string | undefined;
  bookingNum: string | undefined;
  bookingDate: string | undefined;
  paymentMade: number | undefined;
  paymentRemaining: number | undefined;
  status: string | undefined;
  dateFrom: string | undefined;
  dateTo: string | undefined;
  termsInMonths: number | undefined;
  seatQuantity: number | undefined;
  totalDue: number | undefined;
}

export const SingleBooking: React.FC = () => {
  const { bookingId } = useParams<bookingIdParams>();
  
  const [bookingState, setBookingState] = useState<bookingStateParams>()

  useEffect(() => {
    const findBooking = async () => {
      try {
        const booking = await bookingData.filter(data => {
          return data.id === bookingId;
        })
        setBookingState(booking[0])
      } catch (error) {
        console.log(error)
      }
    }

    findBooking()
    return (() => {
      setBookingState({
        id: undefined,
        plan: undefined,
        bookingNum: undefined,
        bookingDate: undefined,
        paymentMade: undefined,
        paymentRemaining: undefined,
        status: undefined,
        dateFrom: undefined,
        dateTo: undefined,
        termsInMonths: undefined,
        seatQuantity: undefined,
        totalDue: undefined,
      })
    })

  }, [bookingId])

  return (
    <HubLayout navKey=''>
      <Card className='p-8'>
        <h3 className="text-xl font-proxiExtraBold">Please add your seat owner (1)</h3>
        <p>Check the details properly before submitting to avoid conflicts</p>
        <Avatar size={ 40 } icon={ <p className='text-black'>1</p> } className='mt-3' />
      </Card>
    </HubLayout>
  );
}