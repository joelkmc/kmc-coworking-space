import React, { useState } from 'react'
import { Select, Carousel } from 'antd';
import { locations, buildings } from '../assets/data/DataHub'
import { locationsCarouselSettings } from '../utils/CarouselSetting';
import { LocationsCard } from './LocationsCard';

const { Option } = Select;

interface LocationSectionProps {
  hubPage?: boolean
}

const LocationSection: React.FC<LocationSectionProps> = ({hubPage = false}) => {
  console.log('section location')

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
    <>

      {/* Location Input */}
      <div className='flex flex-col lg:flex-row justify-between items-center mt-10'>
        <div className="text-center my-2 lg:text-left">
          {
            hubPage ? (
              <h4 
                className='font-proxiExtraBold text-xl text-kmcOrange' 
                style={{marginBottom: 0}}
              >
                Ready to book your next Coworking Space?
              </h4>
            ) : ''
          }
          <h5 
            className='font-proxiExtraBold m-0 text-lg' 
            style={{marginBottom: 0}}
          >
            Choose your preferred location below:
          </h5>
        </div>

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
        
    </>
  )
}

export default LocationSection;