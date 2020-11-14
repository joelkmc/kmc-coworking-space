import { useState } from 'react'

const useToggleState = (initialValue:boolean = false) => {

  const [toggleState, setToggleState] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  }

  return [ toggleState, handleToggle ] as const;
}

export default useToggleState;