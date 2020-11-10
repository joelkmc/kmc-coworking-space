import React from 'react'
import { Modal } from 'antd'

interface NoticeModalProps {
  childComp?: React.ReactNode;
  modalState: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  width?: number | string;
  footer?: null | string;
}

export const NoticeModal: React.FC<NoticeModalProps> = ({ childComp, modalState, handleClose, width = 520, footer = null }) => {
  return (
    <Modal 
      width={ width }
      centered
      visible={ modalState }
      closeIcon='Close'
      className='loginModal'
      footer={ footer }
      maskClosable={ true }
      onCancel={ handleClose }
      bodyStyle={{ padding: '2.6rem 1.5rem' }}>
      { childComp }
    </Modal>
  );
}