import React from 'react'
import useModalState from '../../hooks/useModalState';
import { ButtonType } from '../../utils/ButtonType';
import paypal from '../../assets/images/paypal.svg';
import { ModalComp } from '../../utils/ModalComp';


export const PaypalCheckout: React.FC = () => {
  const [paypalModalState, paypalModalClose, paypalModalOpen] = useModalState(false);

    return (
      <>
        <ButtonType buttonType='default' buttonClass='flex items-center border-black' handleClick={ paypalModalOpen }>
          <img src={ paypal } alt={ paypal } style={{ height: '20px' }} className='text-red' />
          <p className="font-proxiSemiBold p-2">Paypal</p>
        </ButtonType>
        <ModalComp handleClose={ paypalModalClose } modalState={ paypalModalState } childComp={(
          <div id="paypal-button-container"></div>
        )}/>
          
      </>

    );
}