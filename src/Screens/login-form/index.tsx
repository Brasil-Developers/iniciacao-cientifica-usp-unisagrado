import { useState } from 'react';
import {
  Col,
  Row,
  Input,
  Form,
  Button,
  Checkbox,
} from 'antd';

import { ReactComponent as LogoSystem } from 'Image-general/logo.svg';

// Components

// stye item
import './style.scss';

const FormLogin = () => {
  const [form] = Form.useForm();
  const [formItens, setFormItens] = useState();
  const loga = () => {
    setFormItens(form.getFieldsValue());
  };

  return (
    <>
      <Col xs={24} xl={10} className="align">
        {
          JSON.stringify(formItens)
        }
        <Form
          form={form}
          className="login_page__content-card_form"
        >
          <Col span={24} className="login_page__content-card_form-logo align">
            <LogoSystem width="222" height="72" />
          </Col>
          <Col span={24} className="login_page__content-card_form-email align">
            <Col span={12}>
              <Form.Item
                name="email_user"
              >
                <span>E-mail</span>
                <Input placeholder="Digite seu e-mail" />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-pws align">
            <Col span={12}>
              <Form.Item
                name="password_user"
              >
                <Row>
                  <Col span={4}>
                    <span>Senha</span>
                  </Col>
                  <Col span={20} className="login_page__content-card_form-pws--reset_pws">
                    <span>Esqueceu sua senha?</span>
                  </Col>
                </Row>
                <Input placeholder="Digite a senha" />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-remember_psw align">
            <Col span={12}>
              <Checkbox>Lembre-me minha senha teste de</Checkbox>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-btn_enter align">
            <Col span={12}>
              <Button
                onClick={() => loga()}
                type="primary"
                size="large"
              >
                Entrar
              </Button>
              <Col>
                <p>
                  Ainda não é cadastrado?
                  <span>
                    <a href="/rota">
                      Solicitar cadastro.
                    </a>
                  </span>
                </p>
              </Col>
            </Col>
          </Col>
        </Form>
      </Col>
    </>
  );
};
export default FormLogin;
