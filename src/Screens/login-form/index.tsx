import React from 'react';

import {
  Col,
  Row,
  Input,
  Form,
  Button,
  Checkbox,
} from 'antd';

import { ReactComponent as LogoSystem } from 'Image-general/logo.svg';

// stye item
import './style.scss';

// requets
import Auth from '../../shared/requests/auth';

const FormLogin = () => {
  const onFinish = async (values:any) => {
    const response = await Auth.login(values);
    sessionStorage.setItem('token', response.data.token);
    if (response.data) {
      window.location.href = '/home';
    }
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
          // autoComplete="off"
        >
          <Col span={24} className="login_page__content-card_form-email align">
            <Col span={12}>
              <span>E-mail</span>
              <Form.Item
                name="login"
                rules={[{ required: false, message: 'Please input your e-mail!' }]}
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
                  <span>Esqueceu sua senha?</span>
                </Col>
              </Row>
              <Form.Item
                name="senha"
                rules={[{ required: false, message: 'Please input your password!' }]}
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
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                >
                  Entrar
                </Button>
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
