import React from 'react'
import { Row, Col, Typography } from 'antd';
import { featColData1, featColData2 } from '../../assets/data/DataHub';

const { Title, Paragraph } = Typography;

export default function FeatureSection() {
  return (
    <Row>
      <Col 
        span={23}
        md={21}
        lg={19}
        xl={16}
        className='mx-auto mt-16 text-center sm:text-left'
      >
        <Title className='text-center'>
          The Philippines Best 
          <span> Coworking Membership</span>
          <div className='bg-kmcOrange my-3' style={{height: '2px'}}></div>
        </Title>

        {/* Main Features Container */}
        <div className='flex flex-col lg:flex-row flex-wrap mt-12'>

            {/* Features Col-1 */}
            <div className='flex flex-col lg:w-1/2'>

              {/* Feature Item */}
              {
                featColData1.map(feat => {
                  return (
                    <figure 
                      className='flex flex-col sm:flex-row items-center px-5 mb-8 ' 
                      key={feat.id}
                    >
                      
                      <div className="flex w-1/5 items-center justify-center mb-3 sm:mb-0">
                        <img 
                          src={feat.img} 
                          alt={`${feat.img}`}
                          style={{height: '50px', width: 'auto'}}
                        />
                      </div>

                      <figcaption className='w-4/5 md:pr-12 lg:pr-0'>
                        <Title 
                          level={3} 
                          className='font-proxiExtraBold'
                          style={{marginBottom: '0'}}
                        >
                          { feat.title }
                        </Title>
                        <Paragraph style={{marginBottom: '0'}}>
                          { feat.paragraph }
                        </Paragraph>
                      </figcaption>

                    </figure>
                  )
                })
              }

            </div>

            {/* Features Col-2 */}
            <div className='flex flex-col lg:w-1/2'>

              {/* Feature Item */}
              {
                featColData2.map(feat => {
                  return (
                    <figure 
                      className='flex flex-col sm:flex-row items-center px-5 mb-8 ' 
                      key={feat.id}
                    >
                      
                      <div className="flex w-1/5 items-center justify-center mb-3 sm:mb-0">
                        <img 
                          src={feat.img} 
                          alt={`${feat.img}`}
                          style={{height: '50px', width: 'auto'}}
                        />
                      </div>

                      <figcaption className='w-4/5 md:pr-12 lg:pr-0'>
                        <Title 
                          level={3} 
                          className='font-proxiExtraBold'
                          style={{marginBottom: '0'}}
                        >
                          { feat.title }
                        </Title>
                        <Paragraph style={{marginBottom: '0'}}>
                          { feat.paragraph }
                        </Paragraph>
                      </figcaption>

                    </figure>
                  )
                })
              }

          </div>
        </div>
      </Col>
    </Row>
  )
}
