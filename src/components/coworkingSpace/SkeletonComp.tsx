import React from 'react'
import { Skeleton, Card, Carousel, Col, Space } from 'antd'
import { locationsCarouselSettings } from '../../utils/CarouselSetting';

interface SkeletonCompProps {
  loading?: boolean;
}

export const SkeletonComp: React.FC<SkeletonCompProps> = ({ loading }) => {

  const { Image } = Skeleton;

  return (
    <Col 
      span={23}
      md={22}
      xl={16}
      className='mx-0 mt-10 w-full d-flex items-stretch'
    >
      <Card
        bodyStyle={{ 
          padding: '0 10px',
          height: '400px',
        }}
        className='rounded-md overflow-hidden w-full'
        bordered={ false }
      > 
        <Image style={{ height: '180px', minWidth: '300px' }} className='w-full'  />
        <Skeleton loading={ loading } >
          <p></p>
        </Skeleton>
      </Card>
    </Col>
  );
}