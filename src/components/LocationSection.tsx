import React, { useState, useMemo } from 'react'
import { 
  Row, 
  Col, 
  Select, 
  Typography, 
  Carousel,
} from 'antd';
import { locations, buildings } from '../assets/data/Location.data'
import { locationsCarouselSettings } from '../utils/CarouselSetting';
import { LocationsCard } from '../utils/LocationsCard';

const { Title } = Typography;
const { Option } = Select;

const LocationSection = () => {

  const initalBuilding = buildings;

  const [buildingsState, setBuildingsState] = useState<any[]>(initalBuilding);

  // useMemo(() => {
  //   const filterBuildings:any[] =  buildings.filter(building => {
  //     return building.city === locationState
  //   })
    
  //   if(!locationState) setBuildingsState(buildings)
  //   if(locationState) setBuildingsState(filterBuildings)

  // }, [locationState]);

  const handleLocationChange = (value:string) => {

    const filterBuildings:any[] =  initalBuilding.filter(building => {
      if(value === 'BGC') {
        return building.city === 'Taguig';
      }
      return building.city === value;
    })
    
    setBuildingsState(filterBuildings)

  }

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
          arrows={ true } 
          className='locations__carousel pb-10'
        >
          {/* Card Items */}
          {
            buildingsState.map((building) => (
              <div className="px-2 mt-6" key={ building.id }>

                <LocationsCard building={ building } />
                
              </div>
            ))
          }
        </Carousel>
        
      </Col>
    </Row>
  )
}

export default LocationSection;