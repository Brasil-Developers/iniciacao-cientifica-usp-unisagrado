import { Col, Row } from 'antd';

// ICONS
import { ReactComponent as ImageApresentation } from 'assets/icons/initial-page/image-apresentation.svg';

// COMPONENTS
import FooterInitial from '../footer/footer-initial.tsx';
import FormLogin from '../login-form/index.tsx';
// import ResetPassword from '../reset-pws/reset-password.tsx';
// STYLE COMPONENT
import './style.scss';

const InitialPage = () => (
  <>
    <div className="login_page">
      <div className="login_page__top_bar">
      </div>
      <div className="login_page__content">
        <Row>
          <Col xs={24} xl={14} className="login_page__content-img_background">
            {/* {newValue} */}
            <ImageApresentation />
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
