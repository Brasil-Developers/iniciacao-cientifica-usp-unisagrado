import { Layout, Row } from 'antd';
import TopBar from 'Components/TopBar';
import Footer from 'Components/Footer';
import SideMenu from 'Components/SideMenu';

import './page-content-style.scss';

const { Content } = Layout;

const PageContent = ({ children }) => (
  <>
    <Layout>
      <TopBar />
      <Layout>
        <Row>
          <div style={{ width: 90 }}>
            <SideMenu />
          </div>
          <div className="content_page">
            <Content className="content_page__content">
              {children}
            </Content>
          </div>
        </Row>
      </Layout>
      <Footer />
    </Layout>
  </>
);

export default PageContent;
