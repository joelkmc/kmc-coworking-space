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
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
