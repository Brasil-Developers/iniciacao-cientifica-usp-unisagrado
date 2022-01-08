import { Typography } from 'antd';
import PageContent from "Components/PageContent";


import './about-style.scss';

const { Title } = Typography;

const AboutContent = () => (
  <div className="about">
    <div>
      <Title className="about__title" type="secondary" level={4}>Sobre o Portal</Title>
      <div className="about__text">
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
  </div>
);

const About = () => <PageContent content={<AboutContent />} />;

export default About; 
