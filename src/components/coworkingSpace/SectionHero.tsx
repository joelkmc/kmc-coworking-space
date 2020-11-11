import React from 'react'
import useModalState from '../../hooks/useModalState';
import { Row, Col, Carousel } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
import { HeroBGImgStyle, heroImages } from '../../assets/data/HeroCarousel.data';
import { ButtonType } from '../../utils/ButtonType';
import { ModalComp } from '../../utils/ModalComp';
import { BookNowModal } from './BookNowModal';

import coworkingOrtigas from '../../assets/images/coworking-ortigas.webp'
import { readMoreData } from '../../assets/data/ReadMore.data'

const HeroSection: React.FC = () => {

  const [ readMoreModalState, handleReadMoreClose, handleReadMoreOpen ] = useModalState(false);

  const [ bookingModalState, handleBookingFormClose, handleBookingFormOpen ] = useModalState(false)
  
  return (
    <Row className='items-center flex-col md:flex-row overflow-hidden'>

      {/* Hero Section Banner */}
      <Col span={24} md={12} lg={10} style={HeroBGImgStyle}
        className='w-full bg-black py-8 px-5 md:py-10 md:px-8 lg:px-16 flex-grow self-stretch'
      >
        <div 
          className='text-white flex flex-col h-full max-w-lg mx-auto'
        >
          <h1 className='text-3xl font-proxiExtraBold leading-none text-white mt-auto'>
            Ready to book your
            <span className='block text-kmcOrange text-3xl'>
              Coworking Space in the Philippines?
            </span>
          </h1>

          <div className='bg-kmcOrange my-3' style={{height: '2px'}}></div>

          <h5 className='text-xl font-proxiExtraBold text-white'>Hot Desk</h5>

          <p>Dynamic 24/7 access to all coworking space locations with perks!</p>

          <p>Php <strong>5,000.00</strong> seat/mo</p>

          {/* Hero Buttons */}
          <div className='flex flex-col sm:flex-row w-full mt-5 mb-auto justify-center px-3 md:px-0'>
            <ButtonType
              buttonClass='my-1 px-8 h-8 sm:w-1/2 sm:mr-2 md:ml-0 font-proxiSemiBold text-kmcOrange border-kmcOrange hover:bg-kmcOrange hover:text-white hover:border-kmcOrange'
              text='Read More'
              buttonType='default'
              handleClick={ handleReadMoreOpen }
            />
            
            <ButtonType
              buttonClass='my-1 px-8 h-8 sm:w-1/2 sm:mr-2 md:ml-0 font-proxiSemiBold text-white border-kmcOrange'
              text='Book Now'
              buttonType='primary'
              handleClick={ handleBookingFormOpen }
            />
          </div>
        </div>
      </Col>

      {/* Hero Section Carousel */}
      <Col span={24} md={12} lg={14} className='h-full w-full' >
        <Carousel autoplay autoplaySpeed={4000}>
          {
            heroImages.map(image => (
              <div className='w-full' key={image.id}>
          
                <figure className='relative h-full'>
                  {/* Image */}
                  <img
                    src={image.imgUrl} 
                    alt={`${image.officeName}-img`} 
                    className='object-cover mx-auto h-auto'
                    style={{minHeight: '400px'}}
                  />
          
                  {/* Caption */}
                  <figcaption 
                    className='absolute z-20 bottom-0 py-5 bg-black bg-opacity-50 w-full'
                  >
                    <div className="w-full pl-4">
                      <h1 className='text-3xl font-proxiExtraBold leading-8 text-kmcOrange'>
                        <CaretRightOutlined />
                        {image.officeName}
                      </h1>
          
                      <p className="text-white pl-2">
                        {image.address}
                      </p>
                    </div>
                  </figcaption>  
                </figure>
              </div>
            )
          )
          }
        </Carousel>
      </Col>

      {/* Read More Modal */}
      <ModalComp
        handleClose={ handleReadMoreClose }
        modalState={ readMoreModalState }
        childComp={
          <>
            <div className="flex flex-col" style={{ color: '#887373' }}>
              <figure className="rounded overflow-hidden my-3">
                <img 
                  src={ coworkingOrtigas } 
                  alt={ coworkingOrtigas }
                  className='object-cover'
                />
              </figure>
              <div className="space">
                <h3 
                  className='font-proxiSemiBold text-2xl justify-self-start leading-6 text-kmcOrange'
                >
                  Hot Desk
                </h3>
                <div className='bg-kmcOrange my-3' style={{height: '2px'}}></div>
                <p>
                  Unlimited daily access to all KMC collaborative coworking space locations in the Metro and Cebu. Fit for startups and businesses of small teams with its flexible 24/7 setup. Come in anytime no matter your work schedule, and make great impressions through added fully-functional boardroom access. Even treat your team through exclusive member discounts!
                </p>
                <ul className='list-disc pl-4 mt-3'>
                  {
                    readMoreData.map((readMoreItem, i) => {
                      return(<li key={ i }>{ readMoreItem }</li>)
                    })
                  }
                </ul>
              </div>
              <ButtonType 
                buttonClass='mt-4'
                buttonType='primary'
                text='Book Now'
                handleClick={ handleBookingFormOpen }
              />
            </div>
          </>
        }
      />

      <BookNowModal
        bookingModalState = { bookingModalState }
        handleBookingFormClose = { handleBookingFormClose }
      />
    </Row>
  )
}

export default HeroSection;