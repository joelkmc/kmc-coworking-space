import React from 'react'
import { useParams } from 'react-router-dom'

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

export const Invoice: React.FC = () => {
  return (
    <div>
      Invoice
    </div>
  );
}