import { ReactComponent as LogoUsp } from 'assets/icons/usp-logo.svg';
import { ReactComponent as SysLogo } from 'assets/icons/logo-sys.svg';

import '../Footer/footer-style.scss';

export default function FooterInitial() {
  return (
    <footer>
      <LogoUsp />
      <span>©Copyright USP 2021 Todos os direitos reservados</span>
      <SysLogo />
    </footer>
  );
}
