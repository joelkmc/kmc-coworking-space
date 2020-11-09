import { useState } from 'react'

const useModalState = (initialValue:boolean = false) => {

  const [modalState, setModalState] = useState<boolean>(false);

  const handleClose = () => {
    setModalState(false);
  }

  const handleOpen = () => {
    setModalState(true);
  }

  return [ modalState, handleClose, handleOpen ] as const;
}

export default useModalState;