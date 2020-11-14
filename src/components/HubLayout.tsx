import React from 'react'
import { Layout, Col, Row } from 'antd'
import { SideNav } from './SideNav';
import { HeaderNav } from './HeaderNav';
const { Content} = Layout;

interface HubLayoutProps {
  navKey: string;
}


const HubLayout: React.FC<HubLayoutProps> = ({ children, navKey }) => {

  return (
    <Layout style={{ background: '#F5F1F1' }}>

      {/* Side Navigation */}
      <SideNav navKey={navKey} />

      <Layout>

        {/* Header Navigation */}
        <HeaderNav />

        {/* Main Content */}
        <Content className='antdSm:ml-20 antdLg:ml-56' style={{ marginTop: '60px' }}>
          <Row>
            <Col span={23} md={22} lg={20} className='mx-auto py-10'>
              { children }
            </Col>
          </Row>
        </Content>

      </Layout>

    </Layout>
  );
}

export default HubLayout;