import { Layout, Row } from 'antd';
import TopBar from 'Components/TopBar';
import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import Footer from 'Components/Footer';
import SideMenu from 'Components/SideMenu';

import './page-content-style.scss';

const PageContent = ({ children, headerData }) => (
  <Layout className="main_container">
    <TopBar />
    <Row className="middle_container">
      <SideMenu />
      <main className="content_page">
        {headerData && <DefaultPageHeader headerData={headerData} />}
        {children}
      </main>
    </Row>
    <Footer />
  </Layout>
);

export default PageContent;
