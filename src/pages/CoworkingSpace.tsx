import React from 'react'
import { Layout } from 'antd';

import Navigation from '../components/coworkingSpace/Navigation';
import HeroSection from '../components/coworkingSpace/SectionHero';
import FeatureSection from '../components/coworkingSpace/SectionFeature';
import LocationSection from '../components/coworkingSpace/SectionLocationsSelect';

const { Header, Content } = Layout;

export default function CoworkingSpace() {

  return (
    <Layout className="flex flex-col bg-white mb-20">
    
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
  