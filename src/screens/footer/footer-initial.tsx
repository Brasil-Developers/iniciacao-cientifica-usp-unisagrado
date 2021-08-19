import React from 'react';
import { Col, Row } from 'antd';

import { ReactComponent as Usp_Logo } from '../login-form/icons/usp-logo.svg';

import './footer-initial-style.scss';

const FooterInitial = () => {
    return (
        <div>
            <div className="footer_initial">
                <Row>
                    <Col xs={2} xl={2}>
                        <Usp_Logo />
                    </Col>
                    <Col xs={22} xl={22} className="align">
                        <span>
                            ©Copyright USP 2021 Todos os direitos reservados
                        </span>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default FooterInitial;