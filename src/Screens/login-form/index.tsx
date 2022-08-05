import React, { useState } from 'react';

import {
  Col,
  Row,
  Input,
  Form,
  Button,
  Checkbox,
  message,
  Spin,
  Alert,
} from 'antd';

import { ReactComponent as LogoSystem } from 'Image-general/logo.svg';

// stye item
import './style.scss';

// requets
import Auth from '../../shared/requests/auth';

const FormLogin = () => {

  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    const response = await Auth.login(values);
    if (response.data) {
      sessionStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } else {
      message.error('Usuário e/ou senha inválidos.');
    }
    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Col xs={24} xl={10} className="align">
        <Col span={24} className="login_page__content-card_form-logo align">
          <LogoSystem width="222" height="72" />
        </Col>
        <Form
          className="login_page__content-card_form"
          name="loginform"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Col span={24} className="login_page__content-card_form-email align">
            <Col span={12}>
              <span>E-mail</span>
              <Form.Item
                name="login"
                rules={[{ type: 'email', required: true, message: 'Por favor, insira um e-mail valido' }]}
              >
                <Input placeholder="Digite seu e-mail" />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-pws align">
            <Col span={12}>
              <Row>
                <Col span={4}>
                  <span>Senha</span>
                </Col>
                <Col span={20} className="login_page__content-card_form-pws--reset_pws">
                  <span>
                    <a href="/Solicitar_Cadastro">
                      Esqueceu sua senha?
                    </a>
                  </span>
                </Col>
              </Row>
              <Form.Item
                name="senha"
                rules={[{ required: true, message: 'Por favor, insira sua senha' }]}
              >
                <Input.Password placeholder="Digite a senha" />
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-remember_psw align">
            <Col span={12}>
              <Form.Item>
                <Checkbox>Lembre-me minha senha</Checkbox>
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-btn_enter align">
            <Col span={12}>
              <Form.Item>
                {
                  isLoading ? <Spin tip="">
                  <Alert
                    message="Carregando..."
                    type="info"
                  />
                </Spin> : <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  Entrar
                </Button>
                }
              </Form.Item>
              <Col>
                <p>
                  Ainda não é cadastrado?
                  <span>
                    <a href="/Solicitar_Cadastro">
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
