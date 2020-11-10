import React from 'react'
import useModalState from '../hooks/useModalState';
import { Modal, Card, Typography } from 'antd'
import { EnvironmentFilled } from '@ant-design/icons'
import { ButtonType } from './ButtonType'
import { ModalComp } from './ModalComp';


interface LocationsModalProps {
  id: number;
  name: string;
  img: string;
  address: string;
  city: string;
  state: string;
  description: string;
  hidden?: boolean
}

const { Paragraph } = Typography;

export const LocationsCard: React.FC<LocationsModalProps> = ({id,name,img,address,city,state,description,hidden}) => {
  console.log('LocationModal Run')

  const [modalState, handleModalClose, handleModalOpen] = useModalState(false)

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
              handleClick={ handleModalOpen }
            />
          </div>
          <ButtonType
            buttonType='primary'
            buttonClass='mt-auto mb-3'
            text='Book Now'
          />
        </div>
      </Card>

      <ModalComp 
        width= '100vw'
        inlineStyle={{ padding: '0', background: 'black', minHeigt: '70vh' }}
        modalState={ modalState }
        handleClose={ handleModalClose }
        closeIcon={ true }
        childComp={
          <>
            <figure className='relative text-white'>
              <div className="relative">
                <img 
                  src={ img } 
                  alt={ img } 
                  className='object-cover w-full'
                />
                <div className="absolute inset-0 bg-black opacity-25 h-full flex flex-col"></div>
              </div>
              <figcaption className="absolute bottom-0 px-3">
                <h4 className='font-proxiExtraBold text-kmcOrange text-2xl justify-self-start leading-6'>
                  { name }
                </h4>
                <p className=' my-1 leading-4'>{ `${ address }, ${ city }, ${ state }` }</p>
              </figcaption>
            </figure>
            <div className="flex flex-col text-white">
              <p className="my-2 px-4">
                { description }
              </p>
              <ButtonType
                buttonType='primary'
                buttonClass='my-3 mx-2'
                text='Book Now'
              />
            </div>
          </>
        }
      />
    </div>
  );
}
