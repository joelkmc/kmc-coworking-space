import React from 'react'
import { 
  Row, 
  Col, 
  Select, 
  Typography, 
  Card, 
  Carousel,
  Button
} from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import { locations, buildings } from '../assets/data/Location.data'
import { locationsCarouselSettings } from '../utils/CarouselSetting';

const { Title, Paragraph } = Typography;
const { Option } = Select;

export default function LocationSection() {

  return (
    <Row>
      <Col 
        span={23}
        md={22}
        xl={16}
        className='mx-auto mt-10 bg'
      >

        {/* Location Input */}
        <div className='flex flex-col sm:flex-row justify-between items-center'>
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
        <Carousel {...locationsCarouselSettings} arrows={ true } className='locations__carousel pb-10'>
        
          {/* Card Items */}
          {
            buildings.map(building => (
              <div className="px-2 mt-6">
                <Card
                  bodyStyle={{ 
                    backgroundColor: 'rgba(0,0,0)', 
                    padding: '0 10px',
                    height: '220px'
                  }}
                  className='rounded-md overflow-hidden'
                  bordered={ false }
                  cover={
                    <img src={building.img} alt={'frabelle'} style={{ height: '180px' }} className='object-cover' />
                  }
                >
                  <div className="flex flex-col h-full py-2">
                    <h4 className='font-proxiExtraBold text-kmcOrange text-2xl justify-self-start leading-6'>
                      { building.name }
                    </h4>
                    <h5 className="text-white font-proxiSemiBold text-1xl justify-self-center mt-auto">
                      <EnvironmentFilled /> Taguig, Metro Manila
                    </h5>
                    <Paragraph 
                      ellipsis={ true } 
                      className='text-white justify-self-center'
                      style={{ marginBottom: 0 }}
                    >
                      Our first office in Alabang, this facility features large office space with large panoramic window views.
                    </Paragraph>
                    <div className="">
                      <Button type='link' className='text-kmcOrange hover:text-orange-500 transition-all duration-150 ease-in cursor-pointer p-1'>
                        Read More
                      </Button>
                    </div>

                    <Button type='primary' className='mt-auto mb-3'>Book Now</Button>
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
