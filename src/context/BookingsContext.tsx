import React, { createContext, useMemo, useState } from 'react';

interface seatOwner {
  firstName   : string;
  lastName    : string;
  email       : string;
  contactNum  : string;
  position    : string;
}

export interface bookingType {
  id              : number | string;
  bookingPlan     : string;
  buildingId      : number;
  building        ?: Object | null;
  bookingNumber   : string;
  bookingDate     : string;
  dateFrom        : string;
  dateTo          : string
  termsInMonths   : number;
  paymentMade     : number;
  totalPrice      : number;
  isPaid          : boolean;
  seatOwners      : seatOwner[];
}

const bookingData = [
  {
    id: '1',
    bookingPlan: 'Coworking Space - Hot Desk',
    bookingNumber: 'KMC-1EB3',
    buildingId: 1,
    bookingDate: '5/20/2021',
    paymentMade: 5000,
    dateFrom: '5/20/2021',
    dateTo: '5/20/2022',
    termsInMonths: 12,
    totalPrice: 8000,
    isPaid: false,
    seatOwners: [
      {
        firstName: 'Sample',
        lastName: 'Sample',
        email: 'sample@email.com',
        contactNum: '0999123456',
        position: 'samplePos'
      }
    ]
    
  },
  {
    id: '2',
    bookingPlan: 'Coworking Space - Hot Desk',
    bookingNumber: 'KMC-1EB4',
    buildingId: 3,
    bookingDate: '5/20/2021',
    paymentMade: 5000,
    dateFrom: '5/20/2021',
    dateTo: '5/20/2022',
    termsInMonths: 12,
    totalPrice: 8000,
    isPaid: false,
    seatOwners: [
      {
        firstName: 'Sample',
        lastName: 'Sample',
        email: 'sample@email.com',
        contactNum: '0999123456',
        position: 'samplePos'
      }
    ]
  },
  {
    id: '5',
    bookingPlan: 'Coworking Space - Hot Desk',
    bookingNumber: 'KMC-1EB5',
    buildingId: 7,
    bookingDate: '5/20/2021',
    paymentMade: 5000,
    dateFrom: '5/20/2021',
    dateTo: '5/20/2022',
    termsInMonths: 12,
    totalPrice: 8000,
    isPaid: false,
    seatOwners: []
  },
]

// Context
export const BookingsContext = createContext<bookingType[] | any[]>([]);

// Provider
const BookingsProvider: React.FC = (props) => {

  const [bookingState, setBookingState] = useState<bookingType[]>([])

  // Fetch for Bookings
  useMemo(() => {
    setBookingState(bookingData)
    bookingData.forEach(data => console.log(data.seatOwners.length))
  }, []);

  return (
    <BookingsContext.Provider value={bookingState}>
      { props.children }
    </BookingsContext.Provider>
  );
}

export default BookingsProvider;
