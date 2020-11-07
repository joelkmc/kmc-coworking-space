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
    
      {/* Header */}
      <Header 
        className='bg-black px-0 h-14' 
        style={{ position: 'sticky', zIndex: 1, width: '100%', height:'60px'}}
      >
        <Navigation />
      </Header>
      
      {/* Main Section */}
      <Content>

        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeatureSection />
        
        {/* Locations Section */}
        <LocationSection />

      </Content>
    
    </Layout>
  )
}
  