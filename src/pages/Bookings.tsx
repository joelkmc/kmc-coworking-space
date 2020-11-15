import React from 'react';
import HubLayout from '../components/HubLayout';
import { Card, Divider, Table } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { paymentColumns, bookingColumns } from '../components/booking/TableColumns';
import { formatNumToPhp } from '../utils/FormatNumToPhp';

import { bookingData } from '../assets/data/DataHub'

interface bookingDataProps {
  id: string | undefined;
  plan: string | undefined;
  bookingNum: string | undefined;
  bookingDate: string | undefined;
  paymentMade: number;
  paymentRemaining: number;
  status: string | undefined;
  dateFrom: string | undefined;
  dateTo: string | undefined;
  termsInMonths: number | undefined;
  seatQuantity: number | undefined;
  totalDue: number;
}


const Booking: React.FC = () => {

  const formattedPaymentData = (dataArray:any[]) => {
    const formattedData = dataArray.map((data: bookingDataProps, i) => (
      {
        key: i,
        plan: <p>{data.plan}</p>,
        bookingNum: <Link to={ `/hub/bookings/${data.id}` } className='text-kmcOrange'>{data.bookingNum}</Link>,
        bookingDate: <p>{data.bookingDate}</p>,
        paymentMade: <p>&#8369; {formatNumToPhp(data.paymentMade)}</p>,
        paymentRemaining: <p>&#8369; {formatNumToPhp(data.paymentRemaining)}</p>,
        status: <p>{data.status}</p>,
        viewInvoice: <Link to='/' className='text-kmcOrange'>View Invoice</Link>
      })
    )
    return formattedData;
  }
 
  const formattedBookingData = (dataArray:any[]) => {
    const formattedData = dataArray.map((data: bookingDataProps, i) => (
      {
        key: i,
        plan: <p className='font-proxiRegular'>{data.plan}</p>,
        bookingNum: <Link to='/' className='text-kmcOrange'>{data.bookingNum}</Link>,
        dateFrom: <p className='font-proxiRegular'>{data.dateFrom}</p>,
        dateTo: <p className='font-proxiRegular'>{data.dateTo}</p>,
        termsInMonths: <p className='font-proxiRegular'>{data.termsInMonths}</p>,
        seatQuantity: <p className='font-proxiRegular'>{data.seatQuantity}</p>,
        totalDue: <p className='font-proxiRegular'>&#8369; {formatNumToPhp(data.totalDue)}</p>,
        paymentReceived: <p className='font-proxiRegular'>&#8369; {formatNumToPhp(data.paymentMade)}</p>,
      })
    )
    return formattedData;
  }


  return (
    <HubLayout navKey={'2'}>

      <Card className='p-3 rounded my-4 shadow-md'>
        <p>
          <CalendarOutlined className='text-kmcOrange pr-1' />
          Active Bookings
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />
        <Table 
          className='w-full' 
          dataSource={ formattedBookingData(bookingData) }
          columns={ bookingColumns }
          scroll={{ x: 1300 }}
        />
      </Card>
      <Card className='p-3 rounded my-4 shadow-md'>
        <p>
          <ClockCircleOutlined  className='text-kmcOrange pr-1' />
          Payment History
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />
        <Table 
          showHeader={ false }
          className='w-full' 
          dataSource={ formattedPaymentData(bookingData) }
          columns={ paymentColumns }
          scroll={{ x: 1300 }}
        />
      </Card>
    </HubLayout>
  );
}

export default Booking;