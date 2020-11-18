import React from 'react';
import HubLayout from '../components/HubLayout';
import { Card, Divider } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { BookingTable } from '../components/booking/Tables';

const Booking: React.FC = () => {
  
  return (
    <HubLayout navKey={'2'}>

      <Card className='p-3 rounded my-4 shadow-md'>
        <p>
          <CalendarOutlined className='text-kmcOrange pr-1' />
          Active Bookings
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />
        <BookingTable tableType='booking' />
      </Card>
      <Card className='p-3 rounded my-4 shadow-md'>
        <p>
          <ClockCircleOutlined  className='text-kmcOrange pr-1' />
          Payment History
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />
        <BookingTable tableType='payment' />
      </Card>
    </HubLayout>
  );
}

export default Booking;