import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// ICONS
import { ReactComponent as WomamScreen } from 'assets/icons/initial-page/womam-screen.svg';

// ACTIOSN
import { fetchTest } from 'Actions';
// COMPONENTS
import FooterInitial from '../footer/footer-initial.tsx';
import FormLogin from '../login-form/index.tsx';
// import ResetPassword from '../reset-pws/reset-password.tsx';
// STYLE COMPONENT
import './style.scss';

const InitialPage = (props) => {
  const { newValue, getTeste } = props;

  const testeFunc = () => {
    getTeste('fabricio1');
  };
  console.log('wewewe', newValue);
  return (
    <>
      <button type="button" onClick={() => testeFunc()}> teste de dd</button>
      <div className="login_page">
        <div className="login_page__top_bar">
        </div>
        <div className="login_page__content">
          <Row>
            <Col xs={24} xl={14} className="login_page__content-img_background">
              {/* {newValue} */}
              <WomamScreen />
            </Col>
            <FormLogin />
            {/* <ResetPassword /> */}
          </Row>
        </div>
        <FooterInitial />
      </div>
    </>
  );
};

const mapStateToProps = (store) => ({
  newValue: store.test.newValue,
});

const mapDispatchToProps = (dispatch) => ({
  getTeste: (vlr) => dispatch(fetchTest(vlr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);

InitialPage.propTypes = {
  newValue: PropTypes.string.isRequired,
  getTeste: PropTypes.func.isRequired,
};
