import { Layout, Row } from 'antd';
import TopBar from 'Components/TopBar';
import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import Footer from 'Components/Footer';
import SideMenu from 'Components/SideMenu';
import RedirectButton from 'Components/RedirectButton/index.tsx';

import './page-content-style.scss';

const headerData = {
  title: 'Tarefas',
  search: 'Pesquisar Tarefas',
  buttons:
  <RedirectButton
    name="Nova Tarefa"
    path="/Avaliadores/Cadastro"
    type="add"
  />,
};

const PageContent = ({ children }) => (
  <Layout className="main_container">
    <TopBar />
    <Row className="middle_container">
      <SideMenu />
      <main className="content_page">
        <DefaultPageHeader headerData={headerData} type="search_header" />
        {children}
      </main>
    </Row>
    <Footer />
  </Layout>
);

export default PageContent;
