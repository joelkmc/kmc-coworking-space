import React from 'react';
import { ModalComp } from '../utils/ModalComp';
import { coworkingReadMoreData, starterReadMoreData, goldReadMoreData } from '../assets/data/DataHub';
import { ButtonType } from '../utils/ButtonType';

// Images
import coworkingOrtigas from '../assets/images/coworking-ortigas.webp';
import gammaCoworking from '../assets/images/gamma-coworking.webp';

interface ModalCompProps {
  readMoreModalState: boolean;
  handleReadMoreClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleBookingFormOpen: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  type?: 'coworking' | 'starter' | 'gold' | 'platinum' | 'undefined'
}



export const ReadMoreModal: React.FC<ModalCompProps> = ({ readMoreModalState, handleReadMoreClose, handleBookingFormOpen, type }) => {

  // Coworking Read More Modal
  if( type === 'coworking' ) {
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
                  coworkingReadMoreData.map((readMoreItem, i) => {
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

  // Starter Read More Modal
  if( type === 'starter' ) {
    return (
      <ModalComp
      handleClose={ handleReadMoreClose }
      modalState={ readMoreModalState }
      childComp={
        <>
          <div className="flex flex-col" style={{ color: '#887373' }}>
            <figure className="rounded overflow-hidden my-3">
              <img 
                src={ gammaCoworking } 
                alt={ gammaCoworking }
                className='object-cover'
              />
            </figure>
            <div className="space">
              <h3 
                className='font-proxiSemiBold text-2xl justify-self-start leading-6 text-kmcOrange'
              >
                Starter
              </h3>
              <div className='bg-kmcOrange my-3' style={{height: '2px'}}></div>
              <ul className='list-disc pl-4 mt-3'>
                {
                  starterReadMoreData.map((readMoreItem, i) => {
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
  
  // Starter Read More Modal
  if( type === 'gold' || type === 'platinum' ) {
    return (
      <ModalComp
      handleClose={ handleReadMoreClose }
      modalState={ readMoreModalState }
      childComp={
        <>
          <div className="flex flex-col" style={{ color: '#887373' }}>
            <figure className="rounded overflow-hidden my-3">
              <img 
                src={ gammaCoworking } 
                alt={ gammaCoworking }
                className='object-cover'
              />
            </figure>
            <div className="space">
              <h3 
                className='font-proxiSemiBold text-2xl justify-self-start leading-6 text-kmcOrange'
              >
                { type === 'gold' ? 'Gold' : 'Platinum' }
              </h3>
              <div className='bg-kmcOrange my-3' style={{height: '2px'}}></div>
              <ul className='list-disc pl-4 mt-3'>
                {
                  goldReadMoreData.map((readMoreItem, i) => {
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


  return null;
}