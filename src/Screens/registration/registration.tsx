// ICONS
import { Alert, Input } from 'antd';
import FooterInitial from 'Screens/footer/footer-initial.tsx';
import { ReactComponent as BackIcon } from '../../assets/icons/components/reset-password/back.svg';

// STYLE COMPONENT
import './registration-style.scss';

const Resgistration = () => (
  <>
    <div className="login_page">
      <div className="login_page__top_bar"></div>
      <div className="login_page__content">
        <div className="registration__content">
          <div className="registration__btn_back">
            <div className="btn_back">
              <BackIcon className="icon_back" />
              Voltar para a tela de login
            </div>
          </div>
          <div className="title">Solicitar Cadastro</div>
          <div className="content_text">
            Se você já foi cadastrado como avaliador neste portal mas não lembra
            sua senha, selecione a função
            <b> RECUPERAR SENHA </b>
            na tela inicial. Se ainda não foi cadastrado,
            <b> preencha o formulário abaixo </b>
            para que um administrador do portal (Avaliador Master) possa
            realizar seu cadastro. Após o preenchimento, fique atento à sua
            caixa de e-mail. :)
          </div>
          <div className="box_important">
            <Alert
              message="Informational Notes"
              description="Este portal é restrito a profissionais, pesquisadores e alunos
                          integrantes de equipes específicas, autorizadas pelo HRAC-USP.
                          Caso você não esteja enquadrado nessas características, não será
                          possível realizar seu cadastro. Em caso de dúvidas, entre em
                          contato através do e-mail exemplo@email.com.br."
              type="info"
              showIcon
              closable
            />
          </div>
          <div className="data-person_title">
            <text className="title_blue">Dados pessoais</text>
            <text className="subtitle">
              {' '}
              (Necessários para seu cadastro e identificação dentro do portal)
            </text>
            <div className="line"></div>
            <div>
              <table>
                <td>
                  <p className="input_title">
                    Nome
                    <i className="input_must">*</i>
                  </p>
                  <Input
                    placeholder="Digite seu nome completo"
                    style={{ width: '254px', marginRight: '16px' }}
                  />
                </td>
                <td>
                  <p className="input_title">
                    Data de Nasc*
                    <i className="input_must">*</i>
                  </p>
                  <Input
                    placeholder="Digite seu nome completo"
                    style={{ width: '150px', marginRight: '16px' }}
                  />
                </td>
                <td>
                  <p className="input_title">
                    CPF
                    <i className="input_must">*</i>
                  </p>
                  <Input placeholder="Digite seu nome completo" />
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
      <FooterInitial />
    </div>
  </>
);

export default Resgistration;
