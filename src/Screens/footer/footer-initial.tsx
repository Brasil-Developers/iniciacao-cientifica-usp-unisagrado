// import { Col, Row } from 'antd';
import { ReactComponent as LogoSys } from './icons/logo-sys.svg';

import { ReactComponent as UspLogo } from '../login-form/icons/usp-logo.svg';

import './footer-initial-style.scss';

const FooterInitial = () => (
  <div>
    <div className="footer_initial">
      <UspLogo />
      <span>©Copyright USP 2021 Todos os direitos reservados</span>
      <LogoSys />
    </div>
  </div>
);

export default FooterInitial;
