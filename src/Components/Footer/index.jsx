import { ReactComponent as LogoUsp } from 'assets/icons/components/Footer/usp-logo.svg';
import HRAC from 'assets/icons/components/Footer/HRAC-USP-branco.png';

import './footer-style.scss';

export default function Footer() {
  return (
    <footer>
      <span>©Copyright USP 2021 Todos os direitos reservados</span>
      <LogoUsp />
      <img src={HRAC} alt="HRAC USP" />
    </footer>
  );
}
