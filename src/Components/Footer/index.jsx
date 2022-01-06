import { ReactComponent as LogoUsp } from 'assets/icons/usp-logo.svg';

import './footer-style.scss';

export default function Footer() {
  return (
    <footer>
      <span>©Copyright USP 2021 Todos os direitos reservados</span>
      <LogoUsp />
    </footer>
  );
}
