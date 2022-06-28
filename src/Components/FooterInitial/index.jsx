import { ReactComponent as LogoUsp } from 'assets/icons/components/Footer/usp-logo.svg';
import { ReactComponent as SysLogo } from 'assets/icons/components/Footer/logo-sys.svg';

import './footer-initial.scss';

export default function FooterInitial() {
  return (
    <footer className="footer_initial">
      <LogoUsp />
      <span>©Copyright USP 2021 Todos os direitos reservados</span>
      <SysLogo />
    </footer>
  );
}
