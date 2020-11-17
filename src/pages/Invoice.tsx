import React from 'react';
import HubLayout from '../components/HubLayout';
import { Card, Space } from 'antd';
import { NotificationComp } from '../components/Notification';
import { ButtonType } from '../utils/ButtonType';
import { PrinterOutlined } from '@ant-design/icons';
import { Badge } from '../components/Badge';

import kmcLogo from '../assets/images/kmc-logo-2018.webp';
import paypal from '../assets/images/paypal.svg';
import { PaypalCheckout } from '../components/invoice/PaypalCheckout';

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

  const printInvoice = () => {
    const printableElements = document.getElementById('invoiceToPrint')!.innerHTML;
    const orderHtml = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
    const oldPage = document.body.innerHTML;
    document.body.innerHTML = orderHtml;
    window.print();
    document.body.innerHTML = oldPage
  }

  const invoiceCard = 
    (
      <>
        {/* Invoice Card */}
        <Card id='invoiceToPrint' className='py-4 rounded mt-3 px-1 md:px-3 lg:px-6'>
          <figure>
            <img src={ kmcLogo } alt={ kmcLogo } style={{ height: '40px', width: 'auto' }} />
          </figure>
          <div className="flex my-2">

            <div className="w-1/2 pl-2 mt-2">
              <p className="text-xs">
                20th floor Picadilly Star Building, 4th avenue cor 27th street,<br/>
                Bonifacio Global City, Taguig City<br/>
                Phone No. (02) 8779-65-40<br/>
                billing@kmc.solutions<br/>
                VAT Reg. No.: 007-930-327-000<br/>
              </p>
              <p className='mt-5'>Bill To:</p>
              <p className='font-proxiSem iBold'>Firsname Lastname</p>
              <p>sample@email.com</p>
            </div>

            <div className="w-1/2 text-right">
              <p className='mt-3 leading-5'>INVOICE<br/><strong className='font-proxiExtraBold leading-3'>I-9DF9D141</strong></p>
              <p className='mt-3 leading-5'>BALANCE DUE<br/><strong className='font-proxiExtraBold leading-3'>PHP 5,600.00</strong></p>
              <p className='mt-3 leading-5'>INVOICE DATE:<br/><strong className='font-proxiExtraBold leading-3'>Nov 11, 2020</strong></p>
              <p className='mt-3 leading-5'>PAYMENT STATUS<br/><strong className='font-proxiExtraBold leading-3'>PENDING</strong></p>
            </div>

          </div>

          {/* Table */}
          <table className="table-fixed w-full text-center">
            <thead>
              <tr>
                <th className="p-0 md:px-2 lg:px-4 w-3/6 py-2 border font-proxiExtraBold">Product Description</th>
                <th className="p-0 md:px-2 lg:px-4 w-1/6 py-2 border font-proxiExtraBold">Quantity</th>
                <th className="p-0 md:px-2 lg:px-4 w-2/6 py-2 border font-proxiExtraBold">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-left">Coworking Space - Hot Desk x 1 month/s</td>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">PHP 5,000.00</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-proxiSemiBold" colSpan={2}>Subtotal</td>
                <td className="border px-4 py-2">PHP 5,000.00</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-proxiSemiBold" colSpan={2}>VAT (12%)</td>
                <td className="border px-4 py-2">PHP 600.00</td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-left font-proxiSemiBold" colSpan={2}>Total</td>
                <td className="border px-4 py-2">PHP 5,600.00</td>
              </tr>
            </tbody>
          </table>

          {/* Payment Method */}
          <div className="mb-2 mt-8">
            <p className="font-proxiSemiBold">Payment Method</p>
            <ol className='pl-8 list-decimal mt-3'>
              <li>Mode of payment can be cash, check issuance, bank deposit, wire transfer or thru PayPal.</li>
              <li>Please make check payable to:</li>
              <ul className='list-inside' style={{ listStyleType: 'circle' }}>
                <li>Account Name: <strong className='font-proxiExtraBold'>KMC MAG SOLUTIONS INC.</strong></li>
                <li>Account Number: <strong className='font-proxiExtraBold'>003020000383</strong></li>
                <li>Bank: <strong className='font-proxiExtraBold'>UNIONBANK OF THE PHILIPPINES</strong></li>
                <li>Currency: <strong className='font-proxiExtraBold'>PHP</strong></li>
                <li>Swift Code: <strong className='font-proxiExtraBold'>UBPHPHMM</strong></li>
              </ul>
              <ul className='list-inside mt-4' style={{ listStyleType: 'circle' }}>
                <li>Account Name: <strong className='font-proxiExtraBold'>KMC MAG SOLUTIONS INC.</strong></li>
                <li>Account Number: <strong className='font-proxiExtraBold'>133020000324</strong></li>
                <li>Bank: <strong className='font-proxiExtraBold'>UNIONBANK OF THE PHILIPPINES</strong></li>
                <li>Currency: <strong className='font-proxiExtraBold'>USD</strong></li>
                <li>Swift Code: <strong className='font-proxiExtraBold'>UBPHPHMM</strong></li>
              </ul>
            </ol>
            <p className='mt-4 text-red-600'><em>Please make sure to email <strong className='font-proxiExtraBold'>hub@kmc.solutions</strong> if you are processing the payment thru bank deposit.</em></p>
          </div>
        </Card>
      </>
    )

  return (

    <HubLayout navKey=''>

      <div className="px-5">
        <NotificationComp type='danger'>
          <p className='text-2xl font-proxiExtraBold'>This is past due.</p>
          <p>If payment is made thru deposit, kindly email the payment proof at <span className="font-proxiExtraBold">hub@kmc.solutions</span> and indicate your <span className="font-proxiExtraBold">"KMC HUB - [Invoice No.]"</span> on the subject line.</p>
        </NotificationComp>

        <Space className='w-full justify-between'>

          <Badge type='danger' title='PENDING' />
  
          <Space>
            <ButtonType buttonType='primary' buttonClass='flex items-center bg-gray-800 border-none' handleClick={ printInvoice}>
              <PrinterOutlined className='font text-lg' />
              <p className="font-proxiSemiBold p-2">Print</p>
            </ButtonType>

            <PaypalCheckout/>
            
          </Space>
        </Space>
        
        { invoiceCard }
        
      </div>
    </HubLayout>
  );
}