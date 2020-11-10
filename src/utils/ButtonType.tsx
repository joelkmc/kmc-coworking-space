import React from 'react'
import { Button } from 'antd'

interface ButtonTypeProps {
  buttonType : "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined;
  buttonProperties?: string;
  text: string;
  buttonClass?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const ButtonType: React.FC<ButtonTypeProps> = (
  { buttonType, buttonClass = '', text, handleClick, buttonProperties }
) => {
    return (

      <Button 
        { ...buttonProperties }
        type={ buttonType }
        className={ `${buttonClass} rounded` }
        onClick={ handleClick }
      >
        { text }
      </Button>

    );
}