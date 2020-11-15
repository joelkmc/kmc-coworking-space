import React from 'react'
import HubLayout from '../components/HubLayout';
import useModalState from '../hooks/useModalState';
import SectionLocationsSelect from '../components/SectionLocationsSelect'
import { Link } from 'react-router-dom'
import { Card, Divider } from 'antd';
import { ReadMoreModal } from '../components/ReadMoreModal'
import { BookNowModal } from '../components/BookNowModal'
import { NotificationComp } from '../components/Notification';

import kmcBanner from '../assets/images/kmc-coworking-passport-banner.jpg'
import { StarFilled } from '@ant-design/icons'
import { ButtonType } from '../utils/ButtonType';

const Dashboard: React.FC = () => {
  
  // Read More Button Modal State and Methods
  const [ readMoreModalState, handleReadMoreClose, handleReadMoreOpen ] = useModalState(false);

  // Book Now Button Modal State and Methods
  const [ bookingModalState, handleBookingFormClose, handleBookingFormOpen ] = useModalState(false);

  return (
    <HubLayout navKey={'1'}>
      <NotificationComp type='danger'>
        <p className='text-xl font-proxiExtraBold'>COVID-19 Advisory</p>
        <p>We highly encourage all community members to read the new guidelines prior to returning to our workspaces. Follow this link to view the guidelines: <a href='https://bit.ly/2Zn5YkG' target='_blank' rel="noreferrer" className='text-black'>https://bit.ly/2Zn5YkG</a></p>
      </NotificationComp>
      <NotificationComp type='danger'>
        <p className='text-xl font-proxiExtraBold'>Please confirm your email.</p>
        <p>If it doesn't appear in your Inbox folder, kindly check it under SPAM or Junk Folder.</p>
      </NotificationComp>

      <figure className='rounded overflow-hidden'>
        <img src={ kmcBanner } alt={ kmcBanner } className='w-full h-auto' />
      </figure>

      <Card className='p-4 rounded mt-2 md:mt-3 xl:mt-4'>
        <p>
          <StarFilled className='text-kmcOrange pr-1' />
          Coworking Space Rates & Packaged | Virtual Office
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />

        <div className='flex flex-col antdSm:block'>
          <h4 className='w-full text-lg font-proxiExtraBold mt-2'>Hot Desk</h4>
          <div className="flex flex-col py-2 antdSm:flex-row antdSm:items-center">
            <p className='w-full antdSm:w-1/2'>Dynamic 24/7 access to all coworking space locations with perks!</p>
            <div className='flex mt-2 items-start antdSm:w-1/2 antdSm:items-end lg:justify-around flex-col lg:flex-row'>
              <p>Php <strong className='font-proxiExtraBold'>5,000.00</strong> seat/mo</p>
              <ButtonType
                buttonClass='w-full antdSm:w-auto antdSm:my-1 px-8 h-8 font-proxiSemiBold text-white border-kmcOrange'
                text='Book Now'
                buttonType='primary'
                handleClick={ handleBookingFormOpen }
              />
            </div>
          </div>
          <ButtonType
            buttonClass='my-1 font-proxiSemiBold text-kmcOrange border-kmcOrange hover:bg-kmcOrange hover:text-white hover:border-kmcOrange'
            text='Read More'
            buttonType='default'
            handleClick={ handleReadMoreOpen }
          />
        </div>

        <Divider />
      </Card>

      {/* Locations Select Section */}yar
      <SectionLocationsSelect hubPage={ true } />

      {/* Read More Modal */}
      <ReadMoreModal handleBookingFormOpen={ handleBookingFormOpen } handleReadMoreClose={ handleReadMoreClose } readMoreModalState={ readMoreModalState } />

      {/* Book Now Modal Component */}
      <BookNowModal
        bookingModalState = { bookingModalState }
        handleBookingFormClose = { handleBookingFormClose }
      />
      
    </HubLayout>
  );
}

export default Dashboard;