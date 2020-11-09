import React from 'react'
import { Button } from 'antd'

interface ButtonTypeProps {
  buttonType : "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined;
  buttonClass: string;
  text: string;
  handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ButtonType: React.FC<ButtonTypeProps> = (
  { buttonType, buttonClass, text, handleClick }
) => {
    return (

      <Button 
        type={ buttonType }
        className={ `${buttonClass} rounded` }
        onClick={ handleClick }
      >
        { text }
      </Button>

    );
}