import React, { useMemo, useState } from 'react'
import { Select, Carousel } from 'antd';
import { locations, buildings, buildingsVirtual, locationsVirtual } from '../assets/data/DataHub'
import { locationsCarouselSettings } from '../utils/CarouselSetting';
import { LocationsCard } from './LocationsCard';

const { Option } = Select;

interface LocationSectionProps {
  hubPage?: boolean;
  type?: 'coworking' | 'virtual';
}

const LocationSection: React.FC<LocationSectionProps> = ({hubPage = false, type}) => {

  // Buildings Array State and Method
  const [buildingsState, setBuildingsState] = useState<any[]>(buildings);
  const [locationsState, setLocationsState] = useState(locations);

  useMemo(() => {
    if(type === 'coworking') {
      setBuildingsState(buildings)
      setLocationsState(locations)
    }
    if(type === 'virtual') {
      setBuildingsState(buildingsVirtual)
      setLocationsState(locationsVirtual)
    }
  }, [type])

  //@ handleLocationChange filters the card items
  //  filter buildings based on selected locations
  const handleLocationChange = (value:string) => {

    const initialBuildings = type === 'coworking' ? buildings : buildingsVirtual;

    const filterBuildings:any[] = initialBuildings.filter(building => {
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
                Ready to book your next { type === 'coworking' ? 'Coworking Space?' : 'Virtual Office?' }
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
            locationsState.map((building, i) => {
              return(
                <Option 
                  key={ i } 
                  value={ building }
                >
                  { building }
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