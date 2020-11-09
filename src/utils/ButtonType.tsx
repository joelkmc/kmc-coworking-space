import React from 'react'
import { Button } from 'antd'

interface ButtonTypeProps {
  buttonType : "text" | "link" | "ghost" | "default" | "primary" | "dashed" | undefined;
  buttonClass: string;
  text: string;
}

export const ButtonType: React.FC<ButtonTypeProps> = (
  { buttonType, buttonClass, text }
) => {
    return (

      <Button 
        type={ buttonType }
        className={ `${buttonClass} rounded` }
      >
        { text }
      </Button>

    );
}