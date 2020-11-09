import React from 'react'
import { ModalComp } from '../utils/ModalComp'

interface BookNowModalProps {
  modalState: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  childComp?: React.ReactNode;
  width?: number | string;
  footer?: null | string;
}

const BookNowModal: React.FC<BookNowModalProps> = ({ modalState, handleClose }) => {
    return (
      <ModalComp
        modalState={ modalState }
        handleClose={ handleClose }
        childComp= {
          <>
            
          </>
        }
          
      />
    );
}

export default BookNowModal;