import React, { useContext } from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { formatNumToPhp } from '../../utils/FormatNumToPhp';
import { bookingType, BookingsContext } from '../../context/BookingsContext';

const paymentColumns = [
  {
    width: 270,
    dataIndex: 'plan',
    key: 'plan',
  },
  {
    dataIndex: 'bookingNum',
    key: 'bookingNum',
    className: 'font-proxiSemiBold'
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
    title: 'Terms (in months)',
    dataIndex: 'termsInMonths',
    key: 'termsInMonths',
    className: 'font-proxiSemiBold'
  },
  {
    title: 'Quantity (seats)',
    dataIndex: 'seatQuantity',
    key: 'seatQuantity',
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

interface BookingTableProps{
  tableType: 'booking' | 'payment'
}

export const BookingTable: React.FC<BookingTableProps> = ({ tableType }) => {
  
  const bookingState:bookingType[] = useContext(BookingsContext);
  
  
  // Return type of link based on seatowners
  // if booking has existing seat owner return link to single booking page
  // if no seat owner return link to add seat owner page
  const seatOwnersLength = (booking:bookingType) => {
    if (booking.seatOwners.length) {
      return (
        <Link 
        className='text-kmcOrange'
        to={ `/hub/bookings/add-your-seat-owners/${booking.id}` }
        >
          {booking.bookingNumber}
        </Link>
      )
    }
    
    return (
      <Link 
      className='text-kmcOrange'
      to={ `/hub/booking/${booking.id}` }
      >
          {booking.bookingNumber}
        </Link>
    )
  }
  
  // if tableType === 'booking'
  // return Booking Table
  if (tableType === 'booking') {
    const formattedTable = bookingState.map((data: bookingType) => (
      {
        key: data.id,
        plan: <p className='font-proxiRegular'>{data.bookingPlan}</p>,
        bookingNum: seatOwnersLength(data),
        dateFrom: <p className='font-proxiRegular'>{data.dateFrom}</p>,
        dateTo: <p className='font-proxiRegular'>{data.dateTo}</p>,
        termsInMonths: <p className='font-proxiRegular ml-5'>{data.termsInMonths}</p>,
        seatQuantity: <p className='font-proxiRegular ml-5'>{data.seatOwners.length}</p>,
        totalDue: <p className='font-proxiRegular'>&#8369; {formatNumToPhp(data.totalPrice)}</p>,
        paymentReceived: <p className='font-proxiRegular'>&#8369; {formatNumToPhp(data.paymentMade)}</p>,
      })
    )
                
    return (
      <Table 
        className='w-full' 
        dataSource={ formattedTable }
        columns={ bookingColumns }
        scroll={{ x: 1300 }}
      />
    );
  }

  // if tableType === 'payment'
  // return Payment Table
  if(tableType === 'payment') {
    const formattedTable = bookingState.map((data:bookingType) => (
      {
        key: data.id,
        plan: <p>Booking no.: { seatOwnersLength(data) }</p>,
        bookingDate: <p>{data.bookingDate}</p>,
        paymentMade: <p>&#8369; {formatNumToPhp(data.paymentMade)}</p>,
        paymentRemaining: <p>&#8369; {formatNumToPhp(data.totalPrice - data.paymentMade)}</p>,
        status: <p>{data.isPaid ? 'UNPAID' : 'PAID'}</p>,
        viewInvoice: <Link to={`/hub/bookings/invoice/${ data.id }`} className='text-kmcOrange'>View Invoice</Link>
      })
    )

    return (
      <Table 
        className='w-full' 
        dataSource={ formattedTable }
        columns={ paymentColumns }
        scroll={{ x: 1300 }}
      />
    );
  }

  return null
}