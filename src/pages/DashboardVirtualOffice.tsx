import React from 'react'
import HubLayout from '../components/HubLayout';
import useModalState from '../hooks/useModalState';
import SectionLocationsSelect from '../components/SectionLocationsSelect'
import { Card, Divider } from 'antd';
import { ReadMoreModal } from '../components/ReadMoreModal'
import { BookNowModal } from '../components/BookNowModal'
import { NotificationComp } from '../components/Notification';

import { HeroBGImgStyle } from '../assets/data/DataHub';
import { StarFilled } from '@ant-design/icons'
import { ButtonType } from '../utils/ButtonType';
import { Link } from 'react-router-dom';


const DashboardVirtualOffice: React.FC = () => {

  // Starter Modal State and Methods
  const [ starterModalState, handleStarterClose, handleStarterOpen ] = useModalState(false);

  // Gold Modal State and Methods
  const [ goldModalState, handleGoldClose, handleGoldOpen ] = useModalState(false);
  
  // Platinum Modal State and Methods
  const [ platinumModalState, handlePlatinumClose, handlePlatinumOpen ] = useModalState(false);

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

      <div className="bg-black" style={ HeroBGImgStyle }>
        <p className="text-kmcOrange font-proxiExtraBold text-4xl p-10 text-center">Virtual Office</p>
      </div>

      <Card className='p-4 rounded mt-2 md:mt-3 xl:mt-4'>
        <p>
          <StarFilled className='text-kmcOrange pr-1' />
            Virtual Office Rates & Packages | 
          <Link to='/hub' className='text-kmcOrange'> Coworking Space</Link>
        </p>
        <Divider className='bg-kmcOrange my-2' style={{ height: '2px' }} />

        {/* Starter Plan */}
        <div className='flex flex-col antdSm:block'>
          <h4 className='w-full text-lg font-proxiExtraBold mt-2'>Starter</h4>
          <div className="flex flex-col py-2 antdSm:flex-row antdSm:items-center">
            <p className='w-full antdSm:w-1/2'>Use of Business Address (not for registration purposes)</p>
            <div className='flex mt-2 items-start antdSm:w-1/2 antdSm:items-end lg:justify-around flex-col lg:flex-row'>
              <p>Php <strong className='font-proxiExtraBold'>2,500.00</strong> seat/mo</p>
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
            handleClick={ handleStarterOpen }
          />
        </div>

        <Divider />
        
        {/* Gold Plan */}
        <div className='flex flex-col antdSm:block'>
          <h4 className='w-full text-lg font-proxiExtraBold mt-2'>Gold</h4>
          <div className="flex flex-col py-2 antdSm:flex-row antdSm:items-center">
            <p className='w-full antdSm:w-1/2'>Use of Business Address for Local Registration, Call screening and local transfer and more!</p>
            <div className='flex mt-2 items-start antdSm:w-1/2 antdSm:items-end lg:justify-around flex-col lg:flex-row'>
              <p>Php <strong className='font-proxiExtraBold'>4,500.00</strong> seat/mo</p>
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
            handleClick={ handleGoldOpen }
          />
        </div>

        <Divider />
        
        {/* Platinum Plan */}
        <div className='flex flex-col antdSm:block'>
          <h4 className='w-full text-lg font-proxiExtraBold mt-2'>Platinum</h4>
          <div className="flex flex-col py-2 antdSm:flex-row antdSm:items-center">
            <p className='w-full antdSm:w-1/2'>Use of business address for local registration plus a coworking space for 60 hours!</p>
            <div className='flex mt-2 items-start antdSm:w-1/2 antdSm:items-end lg:justify-around flex-col lg:flex-row'>
              <p>Php <strong className='font-proxiExtraBold'>7,500.00</strong> seat/mo</p>
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
            handleClick={ handlePlatinumOpen }
          />
        </div>

        <Divider />
      </Card>

      {/* Locations Select Section */}
      <SectionLocationsSelect hubPage={ true } type='virtual' />

      {/* Book Now Modal Component */}
      <BookNowModal
        bookingModalState = { bookingModalState }
        handleBookingFormClose = { handleBookingFormClose }
      />
      
      {/* Read More Platinum Modal */}
      <ReadMoreModal handleBookingFormOpen={ handleBookingFormOpen } handleReadMoreClose={ handlePlatinumClose } readMoreModalState={ platinumModalState } type='platinum' />
      
      {/* Read More Starter Modal */}
      <ReadMoreModal handleBookingFormOpen={ handleBookingFormOpen } handleReadMoreClose={ handleStarterClose } readMoreModalState={ starterModalState } type='starter' />

      {/* Read More Gold Modal */}
      <ReadMoreModal handleBookingFormOpen={ handleBookingFormOpen } handleReadMoreClose={ handleGoldClose } readMoreModalState={ goldModalState } type='gold' />


      
    </HubLayout>
  );
}

export default DashboardVirtualOffice;