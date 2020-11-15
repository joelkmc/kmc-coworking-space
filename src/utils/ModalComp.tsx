import React from 'react'
import { Modal } from 'antd'

interface ModalCompProps {
  inlineStyle?: object;
  childComp?: React.ReactNode;
  modalState: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  width?: number | string;
  footer?: null | string;
  closeIcon?: boolean;
  className?: string;
}

export const ModalComp: React.FC<ModalCompProps> = ({ inlineStyle, childComp, modalState, handleClose, width = 520, footer = null, closeIcon, className }) => {

  return (
    <Modal 
      width={ width }
      centered
      visible={ modalState }
      closeIcon={ closeIcon ? '' : 'Close' }
      className= {`loginModal px-2 ${className}`}
      footer={ footer }
      maskClosable={ true }
      onCancel={ handleClose }
      bodyStyle={{ padding: '2.6rem 1.5rem', ...inlineStyle }}>
      { childComp }
    </Modal>
  );
}