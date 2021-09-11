import {
  Col, Form, Input, Button, Row,
} from 'antd';

// ICONS
import { ReactComponent as ImageApresentation } from 'assets/icons/initial-page/image-apresentation.svg';
import FooterInitial from 'Screens/footer/footer-initial.tsx';
import { ReactComponent as BackIcon } from '../../assets/icons/components/reset-password/back.svg';

// STYLE COMPONENT
import './reset-password-style.scss';

const ResetPassword = () => (
  <>
    <div className="login_page">
      <div className="login_page__top_bar"></div>
      <div className="login_page__content">
        <Row>
          <Col xs={4} xl={14} className="login_page__content-img_background">
            {/* {newValue} */}
            <ImageApresentation className="image_apresentation" />
          </Col>

          <Col xs={24} xl={10} className="reset_pws">
            <div className="btn_back">
              <BackIcon className="icon_back" />
              Voltar para a tela de login
            </div>
            <Col className="reset_pws__content">
              <Col className="reset_pws__content-btn_back"></Col>
              <Col className="reset-password_title"><p>Redefinir Senha</p></Col>
              <Col>
                <Col className="reset-password_content">
                  Para redefinir sua senha, insira no campo abaixo o e-mail
                  cadastrado no sistema. Assim que enviar a solicitação para
                  redefinição de senha, dê uma olhadinha na sua caixa de e-mail.
                </Col>
              </Col>
              <Form className="login_page__content-card_form">
                <Col
                  span={24}
                  className="login_page__content-card_form-email align"
                >
                  <Col span={12}>
                    <Form.Item name="email_user">
                      <span>E-mail</span>
                      <Input placeholder="Digite seu e-mail" id="email_user" />
                    </Form.Item>
                  </Col>
                </Col>
                <Col
                  span={24}
                  className="login_page__content-card_form-btn_enter align"
                >
                  <Col span={12}>
                    <Button type="primary" size="large">
                      Enviar
                    </Button>
                  </Col>
                </Col>
              </Form>
            </Col>
          </Col>
        </Row>
      </div>
      <FooterInitial />
    </div>
  </>
);

export default ResetPassword;
