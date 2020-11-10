import React from 'react'
import { Row, Col, Typography } from 'antd';

import hours24 from '../assets/images/24-hours.webp'
import calendar from '../assets/images/calendar.webp'
import macmaxBlack from '../assets/images/madmax-balck.webp'
import meetingRoom from '../assets/images/meeting-room.webp'
import neverGoDown from '../assets/images/nevergodown.webp'
import printer from '../assets/images/printer.webp'
import sale from '../assets/images/sale.webp'

const { Title, Paragraph } = Typography;

const featColData1 = [
  {
    id: 1,
    img: neverGoDown,
    title: 'NEVER GO DOWN NETWORK',
    paragraph: 'Work without interruption. KMC provides the highest speed internet across each of our coworking spaces.'
  },
  {
    id: 2,
    img: meetingRoom,
    title: 'MEETING ROOMS',
    paragraph: 'Board meeting or last-minute team huddle? We have you covered with conference room., collaboration areas and phone booths at each KMC coworking space.'
  },
  {
    id: 3,
    img: hours24,
    title: '24/7 ACCESS',
    paragraph: 'Work with your preferred location anytime. KMC grants 24/7 coworking access, perfect for early risers and night owls.'
  },
  {
    id: 4,
    img: calendar,
    title: 'MONTHLY EVENTS',
    paragraph: 'KMC members get access to exclusive and complimentary events each month. Our flagship events include our annual Foam Party and the KMC Sunset Collective.'
  },
]

const featColData2 = [
  {
    id: 1,
    img: macmaxBlack,
    title: 'FREE COFFEE',
    paragraph: 'Enjoy unlimited complimentary Mad Max Coffee© exclusively brewed by KMC. '
  },
  {
    id: 2,
    img: printer,
    title: 'PRINTING & PHOTOCOPY',
    paragraph: 'No need to go out to print or photocopy your document because we will do it for you!'
  },
  {
    id: 3,
    img: sale,
    title: 'PERKS & DISCOUNTS',
    paragraph: 'Enjoy exclusive discounts from local and international KMC Partners.'
  },
]

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
