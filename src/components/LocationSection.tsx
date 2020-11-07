import React from 'react'
import { Row, Col, Select, Typography, Card, Carousel } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import { locations, buildings } from '../assets/data/Location.data'
import frabelle from '../assets/images/frabelle.jpg';

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { Meta } = Card;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function LocationSection() {

  return (
    <Row>
      <Col 
        span={23}
        lg={16}
        className='mx-auto mt-10'
      >

        {/* Location Input */}
        <div className='flex flex-col sm:flex-row justify-between items-center px-2 sm:px-5 md:px-8 lg:px-0 xl:px-16'>
          <Title 
            level={4} 
            className='font-proxiExtraBold' 
            style={{marginBottom: 0}}
          >
            Choose your preferred location below:
          </Title>

          <Select placeholder={'Select a location'} style={{ width: 150 }}>
            {
              locations.map(location => {
                return(
                <Option 
                  key={locations.indexOf(location)} 
                  value={location}
                >
                  {location}
                </Option>
                )
              })
            }
          </Select>
        </div>
        
        {/* Location Cards Carousel */}
        <Carousel {...carouselSettings} className='pb-10'>
        
          {/* Card Items */}
          {
            buildings.map(building => (
              <div className="px-2">
                <Card
                  bodyStyle={{ 
                    backgroundColor: 'rgba(0,0,0)', 
                    padding: '0 10px',
                    height: '220px'
                  }}
                  bordered={ false }
                  cover={
                    <img src={frabelle} alt={'frabelle'} />
                  }
                >
                  <div className="flex flex-col h-full">
                    <h4 className='font-proxiExtraBold text-kmcOrange text-2xl justify-self-start'>
                      { building.name }
                    </h4>
                    <h5 className="text-white font-proxiSemiBold text-1xl justify-self-center">
                      <EnvironmentFilled /> Taguig, Metro Manila
                    </h5>
                    <Paragraph ellipsis={ true } className='text-white justify-self-center'>
                      Our first office in Alabang, this facility features large office space with large panoramic window views.
                    </Paragraph>
                  </div>
                </Card>
              </div>
            ))
          }

        </Carousel>

      </Col>
    </Row>
  )
}
