import React from 'react'

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

export const locationsCarouselSettings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: false,
  arrows:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
      }
    },
    {
      breakpoint: 915,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
      }
    },
    {
      breakpoint: 630,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
      }
    },
  ]
}
