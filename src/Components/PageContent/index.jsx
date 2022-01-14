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
          <SideMenu />
          <main className="content_page">
            <Content className="content_page__content">
              {children}
            </Content>
          </main>
        </Row>
      </Layout>
      <Footer />
    </Layout>
  </>
);

export default PageContent;
