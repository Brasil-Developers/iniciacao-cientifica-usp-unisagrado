import React from 'react';
import { Col, Row } from 'antd';

//ICONS
import { ReactComponent as Womam_screen } from '../../assets/icons/initial-page/womam-screen.svg';

// COMPONENT
import FooterInitial from '../footer/footer-initial';
import FormLogin from '../login-form';
import ResetPassword from '../reset-pws/reset-password';
//STYLE COMPONENT 
import './initial-page-style.scss';

const InitialPage = () => {
    return (
        <>
            <div className="login_page">
                <div className="login_page__top_bar"></div>
                <div className="login_page__content">
                    <Row>
                        <Col
                            xs={24} xl={14}
                            className="login_page__content-img_background"
                        >
                            <Womam_screen />
                        </Col>
                        {/* <FormLogin/> */}
                        <ResetPassword />
                    </Row>
                </div>
                <FooterInitial />
            </div>
        </>
    );
}

export default InitialPage;