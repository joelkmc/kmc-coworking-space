import React from 'react'
import { Row, Col, Button,Carousel } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'

import heroImg1 from '../assets/images/heroImg1.webp'
import heroImg2 from '../assets/images/heroImg3.webp'
import heroImg3 from '../assets/images/heroImg2.jpg'
import blackTile2 from '../assets/images/black-tile-2.webp'

const heroImages = [
  {
    id: 1, 
    imgUrl: heroImg1, 
    officeName: 'Cyber Sigma', 
    address: '20th Floor, Cyber Sigma, Lawton Ave., Taguig, Metro Manila'
  },
  {
    id: 2, 
    imgUrl: heroImg2, 
    officeName: 'Four NEO', 
    address: '4th Ave. Four/NEO, Bonifacio Global City, Taguig, Metro Manila'
  },
  {
    id: 3, 
    imgUrl: heroImg3, 
    officeName: 'Frabelle Corporate Plaza', 
    address: '18th floor, Frabelle Corporate Plaza, 129 Bautista, Makati, Metro Manila'
  },
]

const HeroBGImgStyle = {
  backgroundImage: `url(${blackTile2})`,
  backgroundSize: '120px '
}

export default function HeroSection() {
  return (
    <Row className='items-center flex-col md:flex-row overflow-hidden'>

      {/* Hero Section Banner */}
      <Col 
        span={24}
        md={12}
        lg={10}
        style={HeroBGImgStyle}
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
            <Button 
              className='text-kmcOrange bg-white border-kmcOrange px-8 rounded h-8 hover:bg-orange-500 hover:text-white sm:w-1/2 sm:mr-2 md:ml-0'
            >
              Read More
            </Button>

            <Button 
              className='text-white bg-kmcOrange border-kmcOrange px-8 rounded h-8 hover:bg-orange-500 hover:text-white mt-2 sm:mt-0 sm:w-1/2 sm:ml-2'
            >
              Book Now
            </Button>
          </div>
        </div>
      </Col>

      {/* Hero Section Carousel */}
      <Col 
        span={24}
        md={12}
        lg={14}
        className='h-full'
      >
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

    </Row>
  )
}
