import React from 'react'
import { ModalComp } from '../utils/ModalComp'
import { readMoreData } from '../assets/data/Data.CoworkingSpace';
import { ButtonType } from '../utils/ButtonType'

import coworkingOrtigas from '../assets/images/coworking-ortigas.webp'

interface ModalCompProps {
  readMoreModalState: boolean;
  handleReadMoreClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleBookingFormOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}


export const ReadMoreModal: React.FC<ModalCompProps> = ({ readMoreModalState, handleReadMoreClose, handleBookingFormOpen }) => {

  return (
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
  );
}