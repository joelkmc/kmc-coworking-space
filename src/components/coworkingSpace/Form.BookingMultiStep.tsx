import React from 'react'
import { Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { buildings } from '../../assets/data/Location.data'
import { ButtonType } from '../../utils/ButtonType';

export const BookingDetails: React.FC = () => {
  return(
    <div className="flex flex-col pt-5">

      <Form>
        {/* Location */}
        <Form.Item className='ant-col-24 my-2'>
          <label htmlFor="buildingName" className='font-proxiSemiBold'>Location</label>
          <Select placeholder='Select Location' id='buildingName'>
            { buildings.map((building, i) => (
              <Select.Option value={ building.name } key={ i }>
                {`${ building.city } - ${ building.name }`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Start Date */}
        <div className="flex w-full">
          <Form.Item className='ant-col-24 my-2'>
            <label htmlFor="startDate" className='font-proxiSemiBold'>Start Date</label>
            <DatePicker placeholder='Select Start Date' className='w-full' name='startDate' />
          </Form.Item>
        </div>
        
        {/* No. of Month & No. of Seats */}
        <div className="flex w-full">
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pr-2 my-2'>
              <label htmlFor="numOfSeats" className='font-proxiSemiBold'>Term (No. of Months)</label>
              <InputNumber min={ 1 } value={ 1 } className='w-full mt-1' name='numOfMonths' placeholder='Enter Number of Months' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pl-2 my-2'>
              <label htmlFor="numOfSeats" className='font-proxiSemiBold'>No. of Seats</label>
              <InputNumber min={ 1 } className='w-full mt-1' name='numOfSeats' placeholder='Enter Number of Seats' />
            </Form.Item>
          </div>
        </div>

        {/* Promo Code */}
        <Form.Item className='ant-col-24 my-2'>
          <label htmlFor="promoCode" className='font-proxiSemiBold'>Promo Code</label>
          <Input placeholder='Enter Code Here' name='promoCode' className='mt-1' />
        </Form.Item>

      </Form>

    </div>
  )
}

export const BillingDetails: React.FC = () => {

  const handleTermsClicked = () => {
    window.open('https://cdn2.hubspot.net/hubfs/2867266/KMC%20Hub/Terms%20Of%20Use.pdf');
  }
  
  const handleDataPolicyClicked = () => {
    window.open('https://kmc.solutions/privacy-policy');
  }
  
  const handleCookieClicked = () => {
    window.open('https://kmc.solutions/privacy-policy');
  }

  return(
    <div className="flex flex-col pt-5">
      <h5 className='text-center font-proxiSemiBold'>
        Please make sure that your details here match you valid ID's
      </h5>
      <p className='mt-2'>
        Already a member?
        <ButtonType
          text='Login'
          buttonType='link'
          buttonClass='pl-1'
        />
      </p>
      <Form>

        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row w-full pt-4">
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pr-2'>
              <label htmlFor="firstName" className='font-proxiSemiBold'>First Name</label>
              <Input placeholder='Enter First Name' name='firstName' className='mt-1' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pl-2'>
              <label htmlFor="firstName" className='font-proxiSemiBold'>Last Name</label>
              <Input placeholder='Enter Last Name' name='lastName' className='mt-1' />
            </Form.Item>
          </div>
        </div>

        {/* Company Name and Position */}
        <div className="flex flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pr-2'>
              <label htmlFor="companyName" className='font-proxiSemiBold'>Company Name</label>
              <Input placeholder='Enter Company Name' name='companyName' className='mt-1' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pl-2'>
              <label htmlFor="position" className='font-proxiSemiBold'>Position</label>
              <Input placeholder='Enter Position' name='position' className='mt-1' />
            </Form.Item>
          </div>
        </div>

        {/* Email */}
        <Form.Item className='ant-col-24'>
          <label htmlFor="email" className='font-proxiSemiBold'>Email</label>
          <Input placeholder='Enter Email Here' name='email' className='mt-1' type='email' />
        </Form.Item>

        {/* Password and Confirm Password */}
        <div className="flex flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pr-2'>
              <label htmlFor="password" className='font-proxiSemiBold'>Password</label>
              <Input.Password placeholder='Enter Password' name='password' className='mt-1' type='password' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2">
            <Form.Item className='ant-col-24 sm:pl-2'>
              <label htmlFor="confirmPassword" className='font-proxiSemiBold'>Confirm Password</label>
              <Input.Password placeholder='Confirm Password' name='confirmPassword' className='mt-1' type='password' />
            </Form.Item>
          </div>
        </div>

        {/* Mobile Number */}
        <Form.Item className='ant-col-24'>
          <label htmlFor="mobileNumber" className='font-proxiSemiBold'>Mobile Number</label>
          <Input placeholder='Enter Mobile Number Here' name='mobileNumber' className='mt-1' type='email' />
        </Form.Item>
        
        {/* Billing Address */}
        <Form.Item className='ant-col-24'>
          <label htmlFor="billingAddress" className='font-proxiSemiBold'>Billing Address</label>
          <Input placeholder='Enter Billing Address Here' name='billingAddress' className='mt-1' type='email' />
        </Form.Item>

        {/* Complete Address */}
        <div className="flex flex-col sm:flex-row w-full py-1 flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-1">
            <Form.Item className='ant-col-24'>
              <label htmlFor="password" className='font-proxiSemiBold'>Country</label>
              <Input placeholder='Enter Country' name='password' className='mt-1' type='password' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-1">
            <Form.Item className='ant-col-24'>
              <label htmlFor="confirmPassword" className='font-proxiSemiBold'>City</label>
              <Input placeholder='Enter City' name='confirmPassword' className='mt-1' type='password' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-1">
            <Form.Item className='ant-col-24'>
              <label htmlFor="password" className='font-proxiSemiBold'>State / Region</label>
              <Input placeholder='Enter State / Region' name='password' className='mt-1' type='password' />
            </Form.Item>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 px-1">
            <Form.Item className='ant-col-24'>
              <label htmlFor="confirmPassword" className='font-proxiSemiBold'>Postal / ZIP Code</label>
              <Input placeholder='Postal / ZIP Code' name='confirmPassword' className='mt-1' type='password' />
            </Form.Item>
          </div>
        </div>

        {/* Location */}
        <Form.Item className='ant-col-24'>
          <label htmlFor="paymentOption" className='font-proxiSemiBold'>Payment Reference</label>
          <Select placeholder='Select Location' id='paymentOption'>
              <Select.Option value='monthly'> Monthly - One Payment per Month
              </Select.Option>
          </Select>
        </Form.Item>

      </Form>

      <p>
        By clicking next, you agree to our
        <span className='cursor-pointer text-kmcOrange' onClick={ handleTermsClicked }> Terms of Use </span>
        and that you have read our
        <span className='cursor-pointer text-kmcOrange' onClick={ handleDataPolicyClicked }> Data Use Policy </span>
        , including our 
        <span className='cursor-pointer text-kmcOrange' onClick={ handleCookieClicked }> Cookie  </span>
        Use.
      </p>
    </div>
  )
}

export const PaymentDetails: React.FC = () => {
  return(
    <div className="flex flex-col">
      <h1>Payment Details</h1>
    </div>
  )
}