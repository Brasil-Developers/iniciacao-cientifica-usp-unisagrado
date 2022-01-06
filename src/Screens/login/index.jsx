import { Col, Row } from 'antd';

// ICONS

import { ReactComponent as ImageApresentation } from 'assets/icons/initial-page/image-apresentation.svg';

// COMPONENTS

import FooterInitial from 'Components/FooterInitial';
import TopBar from 'Components/TopBar';
import FormLogin from '../login-form/index.tsx';

// STYLE COMPONENT

import './style.scss';

const InitialPage = () => (
  <>
    <div className="login_page">
      <TopBar />
      <div className="login_page__content">
        <Row>
          <Col xs={24} xl={14}>
            {/* {newValue} */}
            <ImageApresentation className="login_page__content__img_apresentation" />
          </Col>
          <FormLogin />
          {/* <ResetPassword /> */}
        </Row>
      </div>
      <FooterInitial />
    </div>
  </>
);

export default InitialPage;
