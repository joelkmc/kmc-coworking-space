import React from 'react'
import useModalState from '../hooks/useModalState';
import { Card, Typography } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons'
import { ButtonType } from '../utils/ButtonType'
import { ModalComp } from '../utils/ModalComp';
import { BookNowModal } from './BookNowModal';

const { Paragraph } = Typography;

interface LocationsCardProps {
  id: number;
  name: string;
  img: string;
  address: string;
  city: string;
  state: string;
  description: string;
  hidden?: boolean
}

export const LocationsCard: React.FC<LocationsCardProps> = ({id,name,img,address,city,state,description,hidden}) => {

  console.log('Location card redered')
  // Read More State and Methods
  const [readMoreState, handleReadMoreClose, handleReadMoreOpen] = useModalState(false)
  
  // Book Now State and Methods
  const [bookingModalState, handleBookingClose, handleBookingOpen] = useModalState(false)

  return (
    <div className="px-2 mt-6" key={ id }>
      <Card
        bodyStyle={{ 
          backgroundColor: 'rgba(0,0,0)', 
          padding: '0 10px',
          height: '220px'
        }}
        className={`rounded-md overflow-hidden ${ hidden ? 'hidden' : 'block' }`}
        bordered={ false }
        cover={
          <img src={img} alt={'frabelle'} style={{ height: '180px' }} className='object-cover' />
        }
      >
        <div className="flex flex-col h-full py-2">
          <h4 className='font-proxiExtraBold text-kmcOrange text-2xl justify-self-start leading-6'>
            { name }
          </h4>
          <h5 className="text-white font-proxiSemiBold text-1xl justify-self-center mt-3">
            <EnvironmentFilled /> {`${ city }, ${ state }`}
          </h5>
          <Paragraph 
            ellipsis={ true } 
            className='text-white justify-self-center'
            style={{ marginBottom: 0 }}
          >
            Our first office in Alabang, this facility features large office space with large panoramic window views.
          </Paragraph>
          <div className="">
            <ButtonType 
              buttonType='link' 
              text='Read More' 
              buttonClass='transition-all duration-150 ease-in cursor-pointer p-1' 
              handleClick={ handleReadMoreOpen }
            />
          </div>
          <ButtonType
            buttonType='primary'
            buttonClass='mt-auto mb-3'
            text='Book Now'
            handleClick={ handleBookingOpen }
          />
        </div>
      </Card>

      {/* Read More Modal */}
      <ModalComp 
        width= '100vw'
        className='aswwwwww'
        inlineStyle={{ padding: '0', background: 'black' }}
        modalState={ readMoreState }
        handleClose={ handleReadMoreClose }
        closeIcon={ true }
        childComp={
          <div className='flex flex-col md:flex-row h-full' style={{ minHeight: '60vh' }}>
            <figure className=' text-white md:w-4/6'>
              <img 
                src={ img } 
                alt={ img } 
                className='object-cover w-full h-full'
                style={{ maxHeight: '80vh' }}
              />
              <div className="absolute inset-0 bg-black opacity-25 h-full flex flex-col"></div>
            </figure>
            <div 
              className="flex flex-col text-white pt-5 pb-2 justify-center md:w-2/6"
            >
              <div className="w-full flex flex-col h-full justify-around p-5" style={{ maxHeight: '350px' }}>
                <h4 className='font-proxiExtraBold text-kmcOrange text-2xl leading-6'>
                  { name }
                </h4>
                <p className='leading-5 my-1'>{ `${ address }, ${ city }, ${ state }` }</p>
                <p className="my-2 leading-5 md:leading-normal">
                  { description }
                </p>
                <ButtonType
                  buttonType='primary'
                  buttonClass='my-3 mx-2 lg:w-1/2'
                  text='Book Now'
                />
              </div>
            </div>
          </div>
        }
      />

      {/* Book Now Modal Component */}
      <BookNowModal
        bookingModalState = { bookingModalState }
        handleBookingFormClose = { handleBookingClose }
      />
    </div>
  );
}
