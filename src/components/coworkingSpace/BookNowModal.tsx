import React, { useState } from 'react'
import { ModalComp } from '../../utils/ModalComp';
import { Space, Steps } from 'antd';
import { ButtonType } from '../../utils/ButtonType';
import { BillingDetails, BookingDetails, PaymentDetails } from './Form.BookingMultiStep'

const { Step } = Steps

interface BookNowModalProps {
  bookingModalState: boolean;
  handleBookingFormClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const BookNowModal: React.FC<BookNowModalProps> = ({
  bookingModalState,
  handleBookingFormClose,
}) => {

  // Important Notice Modal State 
  const [isNoticeHidden, setIsNoticeHidden] = useState<boolean>(false);
  
  // Booking Detail Current Step State 
  const [bookingDetailState, setBookingDetailState] = useState(0);

  //@ handleBookingSteps props for Steps onChange
  //  handles changes in bookingDetailState
  const handleBookingSteps = ( current:number ) => {
    setBookingDetailState(current)
  }
  
  //@ bookingPreviousStep props for Previous Step button
  //  minus 1 on handleBookingSteps
  const bookingPreviousStep = () => {
    setBookingDetailState(prevState => prevState - 1)
  }
  
  //@ bookingPreviousStep props for Next Step button
  //  add 1 on handleBookingSteps
  const bookingNextStep = () => {
    setBookingDetailState(prevState => prevState + 1)
  }
  
  //@ bookingDetailState = 0 = BookingDetails Component 
  //@ bookingDetailState = 1 = BillingDetails Component 
  //@ bookingDetailState = 2 = PaymentDetails Component
  const bookingMultiStepForms = [
    {
      title: 'Booking Details',
      component: <BookingDetails />
    },
    {
      title: 'Billing Details',
      component: <BillingDetails />
    },
    {
      title: 'Payment Details',
      component: <PaymentDetails />
    },
  ]

  return (
    <>
      {/* Notice Modal */}
      <ModalComp
        width={ 600 }
        className='z-50'
        handleClose={ handleBookingFormClose }
        modalState={ bookingModalState }
        childComp={
          <>
            {/* NOTICE */}
            <div className="flex flex-col" hidden={isNoticeHidden}>
              <h3 className='font-proxiExtraBold text-2xl justify-self-start leading-6 text-center'>
                Important Notice
              </h3>
              <Space direction='vertical' >
                <p className='mt-5 mb-2'>
                  In order to minimize cross-community infection during the pandemic, the inter-building access feature of KMC's hot desk service will be temporarily limited to only <strong>ONE site of your choice.</strong> For concerns regarding this, please email <strong>hub@kmc.solutions</strong>.
                </p>
                <p className='my-2'>
                  Please be informed as well that the following KMC Workspace locations require a special arrangements prior to usage:
                </p>
                <p className="mt-2 bt-1">
                  <strong>V Corporate Center</strong> (Requires pre-listing of members 3-working days prior)
                </p>
                <p className="mt-2 bt-1">
                  <strong>Uptown Tower 2</strong> (Requires pre-listing of members 3-working days prior)
                </p>
                <p className="mt-2 bt-1">
                  <strong>SM Aura</strong> (Requires pre-listing of members 3-working days prior)
                </p>
                <p className="mt-2 bt-1">
                  <strong>ORE Central, BGC</strong> (Not Available for Coworking)
                </p>
                <p className="mt-2 bt-1">
                  <strong>Unionbank Tower, Ortigas</strong> (Not Available for Coworking)
                </p>
              </Space>
              <ButtonType 
                buttonClass='mt-4'
                buttonType='primary'
                text='Get Started'
                handleClick={ () => setIsNoticeHidden(true) }
              />
            </div>

            {/* BOOKING MULTI STEP FORM */}
            <div className="flex flex-col" hidden={!isNoticeHidden}>
              <h3 className='font-proxiExtraBold text-xl my-4 mb-6 justify-self-start leading-6 text-center'>
                Get your Coworking Space Membership in 3 easy steps!
              </h3>
              
              <Steps 
                size="small"
                current={ bookingDetailState } 
                onChange={ handleBookingSteps } 
              >
                {bookingMultiStepForms.map((form, i) => (
                  <Step title={ form.title } key={ i } />
                ))}
              </Steps>

              {bookingMultiStepForms[bookingDetailState].component}

              <div className="flex w-full flex-grow">
                { bookingDetailState > 0 && (
                  <ButtonType 
                    buttonClass='mt-4 mr-2 w-full'
                    buttonType='default'
                    text='Previous Step'
                    handleClick={ bookingPreviousStep }
                  />
                )}

                { bookingDetailState >= 0 && bookingDetailState !== 2 && (
                  <ButtonType 
                    buttonClass='mt-4 w-full'
                    buttonType='primary'
                    text='Next Step'
                    handleClick={ bookingNextStep }
                  />
                )}

                { bookingDetailState === 2 && (
                  <ButtonType 
                    buttonClass='mt-4 ml-2 w-full'
                    buttonType='primary'
                    text='Done'
                  />
                )}
              </div>
            </div>
          </>
        }
      />
    </>
  )
}