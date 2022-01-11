import { Typography, Col, Row } from 'antd';
import LogoUsp from 'assets/icons/components/About/usp.jpg';
import LogoUnisagrado from 'assets/icons/components/About/unisagrado-transparente-cor.jpg';
import LogoHRAC from 'assets/icons/components/About/HRAC-USP.jpg';
import LogoCentrinho from 'assets/icons/components/About/Centrinho_logo.jpg';
import LogoFOB from 'assets/icons/components/About/FOB-USP.jpg';

import './about-style.scss';

const { Title } = Typography;

const About = () => (
  <div className="about">
    <div className="about-text">
      <Title className="about-text__title" type="secondary" level={4}>Sobre o Portal</Title>
      <div className="about-text__content">
        <h2>
          Bem-vindo ao Analise, <br/> 
          O primeiro Portal online para Análise da Fala!
        </h2>
        <p>
          Este projeto é resultado de uma parceria envolvendo pesquisadores do 
          Laboratório de Fonética do Hospital de Reabilitação de Anomalias Craniofaciais da 
          Universidade de São Paulo (LAFO-HRAC-USP) e a Unisagrado.
        </p>
        <p>  
          O portal foi desenvolvido visando informatizar a análise de gravações de fala 
          anonimizadas por avaliadores múltiplos e anônimos (dado anonimizado, que é aquele que, 
          originariamente, era relativo a uma pessoa, mas que passou por etapas que garantiram a 
          desvinculação dele a essa pessoa).
        </p>
        <p>
          Este portal permite: o cadastro de Avaliadores; o cadastro anonimizado de Gravações 
          de Amostras de Fala; e a Análise Anonimizada das gravações por avaliadores cadastrados.
        </p>
      </div>
    </div>
    <div className="about-images">
      <img src={LogoUsp} alt="Logo USP" />
      <img src={LogoUnisagrado} alt="Logo Unisagrado" />
      <img src={LogoHRAC} alt="Logo HRAC" />
      <img src={LogoCentrinho} alt="Logo Centrinho" />
      <img src={LogoFOB} alt="Logo FOB" />
    </div>
  </div>
);

export default About; 
