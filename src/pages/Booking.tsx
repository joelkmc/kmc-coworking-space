import React from 'react';
import HubLayout from '../components/HubLayout';
import { Card, Divider, Table } from 'antd';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { NotificationComp } from '../components/Notification'

const Booking: React.FC = () => {

  const paymentData = [
    {
      key: 1,
      plan: <p>Coworking Space - Hot Desk</p>,
      bookingNum: <Link to='/' className='text-kmcOrange'>KMC-1EB3</Link>,
      bookingDate: <p>5/20/2021</p>,
      paymentMade: <p>&#8369; 5,000.00</p>,
      paymentRemaining: <p>&#8369; 3,000.00</p>,
      status: <p>2</p>,
      viewInvoice: <Link to='/' className='text-kmcOrange'>View Invoice</Link>,
    },
    {
      key: 2,
      plan: <p>Coworking Space - Hot Desk</p>,
      bookingNum: <Link to='/' className='text-kmcOrange'>KMC-1EB3</Link>,
      bookingDate: <p>5/20/2021</p>,
      paymentMade: <p>&#8369; 5,000.00</p>,
      paymentRemaining: <p>&#8369; 3,000.00</p>,
      status: <p>2</p>,
      viewInvoice: <Link to='/' className='text-kmcOrange'>View Invoice</Link>,
    },
  ]

  const paymentColumns = [
    {
      width: 270,
      dataIndex: 'plan',
      key: 'plan',
    },
    {
      dataIndex: 'bookingNum',
      key: 'bookingNum',
    },
    {
      dataIndex: 'bookingDate',
      key: 'bookingDate',
    },
    {
      dataIndex: 'paymentMade',
      key: 'paymentMade',
    },
    {
      dataIndex: 'paymentRemaining',
      key: 'paymentRemaining',
    },
    {
      dataIndex: 'status',
      key: 'status',
    },
    {
      dataIndex: 'viewInvoice',
      key: 'viewInvoice',
    },
  ]

  const bookingData = [
    {
      key: 1,
      plan: <p className='font-proxiRegular'>Coworking Space - Hot Desk</p>,
      bookingNum: <Link to='/' className='text-kmcOrange'>KMC-1EB3</Link>,
      dateFrom: <p className='font-proxiRegular'>5/20/2021</p>,
      dateTo: <p className='font-proxiRegular'>5/20/2022</p>,
      termsInMonths: <p className='font-proxiRegular'>2</p>,
      seatQuantity: <p className='font-proxiRegular'>2</p>,
      totalDue: <p className='font-proxiRegular'>&#8369; 3,000.00</p>,
      paymentReceived: <p className='font-proxiRegular'>&#8369; 5,000.00</p>,
    },
    {
      key: 2,
      plan: <p className='font-proxiRegular'>Coworking Space - Hot Desk</p>,
      bookingNum: <Link to='/' className='text-kmcOrange'>KMC-1EB3</Link>,
      dateFrom: <p className='font-proxiRegular'>5/20/2021</p>,
      dateTo: <p className='font-proxiRegular'>5/20/2022</p>,
      termsInMonths: <p className='font-proxiRegular'>2</p>,
      seatQuantity: <p className='font-proxiRegular'>2</p>,
      totalDue: <p className='font-proxiRegular'>&#8369; 3,000.00</p>,
      paymentReceived: <p className='font-proxiRegular'>&#8369; 5,000.00</p>,
    },
  ]

  const bookingColumns = [
    {
      title: 'Plan',
      dataIndex: 'plan',
      key: 'plan',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Booking No.',
      dataIndex: 'bookingNum',
      key: 'bookingNum',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Date From',
      dataIndex: 'dateFrom',
      key: 'dateFrom',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Date To',
      dataIndex: 'dateTo',
      key: 'dateTo',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Terms(in months)',
      dataIndex: 'termsInMonths',
      key: 'termsInMonths',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Quantity(seats)',
      dataIndex: 'termsInMonths',
      key: 'termsInMonths',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Total Due',
      dataIndex: 'totalDue',
      key: 'totalDue',
      className: 'font-proxiSemiBold'
    },
    {
      title: 'Payment Received',
      dataIndex: 'paymentReceived',
      key: 'paymentReceived',
      className: 'font-proxiSemiBold'
    },
  ]


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
          dataSource={ bookingData }
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
          dataSource={ paymentData }
          columns={ paymentColumns }
          scroll={{ x: 1300 }}
        />
      </Card>
    </HubLayout>
  );
}

export default Booking;