import { useState } from 'react';


export const useInputState = (initialValue:string) => {
  
  const [value, setValue] = useState(initialValue);
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const resetValue = () => setValue(initialValue);
  
  return { 
    value,
    handleChange, 
    resetValue, 
    bindToInput: { 
      value,
      onChange: handleChange 
    } 
  }
}