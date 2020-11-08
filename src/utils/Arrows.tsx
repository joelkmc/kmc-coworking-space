import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export const NextArrow = (props:any) => {
  const { className, onClick } = props;

  return (
    <div
    className={className}
      style={{ color: '#f99d3a', fontSize: '30px' }}
      onClick={onClick}
    />
  );
}

export const PrevArrow = (props:any) => {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      style={{ color: '#f99d3a', fontSize: '30px' }}
      onClick={onClick}
    >
    </div>
  );
}