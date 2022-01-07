import { Layout } from "antd";
import TopBar from "../../Components/TopBar";
import Footer from "Components/Footer/index.jsx";
import SideMenu from "Components/SideMenu";

import './about-style.scss';

const { Content } = Layout;

const About = () => (
  <>
    <Layout>
      <TopBar />
      <Layout>
        <SideMenu />
        <Content>
          <h1>About</h1>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  </>
);

export default About; 