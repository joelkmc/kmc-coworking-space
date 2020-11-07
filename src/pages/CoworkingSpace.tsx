import React from 'react'
import { Layout, Row, Col } from 'antd';

import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import LocationSection from '../components/LocationSection';

const { Header, Content } = Layout;

export default function CoworkingSpace() {

  return (
    <Layout className="flex flex-col bg-white">
    
      {/* Header Layout */}
      <Header 
        className='bg-black px-0 h-14' 
        style={{ position: 'sticky', zIndex: 1, width: '100%', height:'60px'}}
      >
        <Navigation />
      </Header>
      
      {/* Main Section Layout */}
      <Content>

        {/* Hero Section Layout */}
        <Row>
          <Col span={16} className='mx-auto'>
            <HeroSection />
          </Col>
        </Row>

        {/* Features Section Layout */}
        <Row>
          <Col span={16} className='mx-auto'>
            <FeatureSection />
          </Col>
        </Row>
        
        {/* Locations Section Layout */}
        <Row>
          <Col span={16} className='mx-auto'>
            <LocationSection />
          </Col>
        </Row>

      </Content>
    
    </Layout>
  )
}
  