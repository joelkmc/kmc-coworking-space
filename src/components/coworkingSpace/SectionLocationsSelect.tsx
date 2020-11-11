import React, { useState } from 'react'
import { Row, Col, Select, Typography, Carousel } from 'antd';
import { locations, buildings } from '../../assets/data/Data.CoworkingSpace'
import { locationsCarouselSettings } from './CarouselSetting';
import { LocationsCard } from './LocationsCard';

const { Title } = Typography;
const { Option } = Select;

const LocationSection: React.FC = () => {

  // Buildings Array State and Method
  const [buildingsState, setBuildingsState] = useState<any[]>(buildings);

  //@ handleLocationChange filters the card items
  //  filter buildings based on selected locations
  const handleLocationChange = (value:string) => {

    const filterBuildings:any[] = buildings.filter(building => {
      if(value === 'BGC') {
        return building.city === 'Taguig';
      }
      return building.city === value;
    })
    
    setBuildingsState(filterBuildings)

  }
  
  //@ carouselCards ( default = buildingsState )
  //  returns a array of cards based on selected location
  const carouselCards = buildingsState.map(building => 
    <LocationsCard 
      address={ building.address } 
      city={ building.city }
      name={ building.name }
      description={ building.description }
      state={ building.state }
      id={ building.id }
      key={ building.id }
      img={ building.img }
    />      
  )

  return (
    <Row>
      <Col span={23} md={22} xl={16} className='mx-auto mt-10 bg'>

        {/* Location Input */}
        <div className='flex flex-col sm:flex-row justify-between items-center'>
          <Title 
            level={4} 
            className='font-proxiExtraBold' 
            style={{marginBottom: 0}}
          >
            Choose your preferred location below:
          </Title>

          <Select 
            placeholder={'Select a location'} 
            style={{ width: 150 }}
            onChange={ handleLocationChange }
          >
            {
              locations.map(location => {
                return(
                <Option 
                  key={locations.indexOf(location)} 
                  value={location}
                >
                  { location }
                </Option>
                )
              })
            }
          </Select>
        </div>
        
        {/* Location Cards Carousel */}
        <Carousel 
          {...locationsCarouselSettings} 
          className='locations__carousel pb-10'
          
        >
          {/* Card Items */}
          { carouselCards }
        </Carousel>
        
      </Col>
    </Row>
  )
}

export default LocationSection;