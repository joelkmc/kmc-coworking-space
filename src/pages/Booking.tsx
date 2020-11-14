import React from 'react'
import HubLayout from '../components/HubLayout'


const Booking: React.FC = () => {
  return (
    <HubLayout navKey={'2'}>
      <h1 className='bg-black' style={{ background: '#F5F1F1' }}>Booking</h1>
    </HubLayout>
  );
}

export default Booking;