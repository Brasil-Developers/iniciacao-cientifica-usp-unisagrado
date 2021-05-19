import React from 'react';
import { Col, Row, Input, Form, Button, Checkbox } from 'antd';

import { ReactComponent as Womam_screen } from './icons/womam-screen.svg';
import { ReactComponent as LogoSystem } from '../../image-general/logo.svg';
import { ReactComponent as Usp_Logo } from './icons/usp-logo.svg';

//stye item 
import './style.scss';

const Login = () => {

  //create a [new Form] to the login 
  const [form] = Form.useForm();

  const loga = () => {
    let formItens = form.getFieldsValue();
    console.log( formItens.email_user );
    console.log( formItens.password_user );
    console.log( formItens.remember_psw );
  };

  return (
    <>
      <div className="login_page">
        <div className="login_page__top_bar"></div>

        <div className="login_page__content">
          <Row>
            <Col
              xs={24} xl={14}
              className="login_page__content-img_background"
            >
              <Womam_screen />
            </Col>
            <Col
              xs={24} xl={10}
              className="align"
            > 
              <Form  
                form={form}
                className="login_page__content-card_form"
              > 
                <Col span={24} className="login_page__content-card_form-logo align">
                  <LogoSystem />
                </Col>
                <Col span={24} className="login_page__content-card_form-email align">
                  <Col span={12}>
                    <Form.Item 
                      name="email_user"
                    >
                      <label>E-mail</label>
                      <Input placeholder="Digite seu e-mail"/>
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
                          <label>Senha</label>
                        </Col>
                        <Col span={20} className="login_page__content-card_form-pws--reset_pws">
                          <span>Esqueceu sua senha?</span>
                        </Col>
                      </Row>
                      <Input placeholder="Digite a senha "/>
                    </Form.Item>
                  </Col>
                </Col>
                <Col span={24} className="login_page__content-card_form-remember_psw align">
                  <Col span={12}>
                    <Form.Item 
                      name="remember_psw"
                    >
                      <Checkbox>Lembre-me minha senha</Checkbox>
                    </Form.Item>
                  </Col>
                </Col>
                <Col span={24} className="login_page__content-card_form-btn_enter align">
                  <Col span={12}>
                    <Button 
                      onClick={()=> loga()}
                      type="primary"
                      size="large"
                    >
                      Entrar
                    </Button>
                    <Col>
                      <p>
                        Ainda não é cadastrado?  
                        <span> 
                          <a>
                            Solicitar cadastro.
                          </a>
                        </span>
                      </p>
                    </Col>
                  </Col>
                </Col>
              </Form> 
            </Col>
          </Row>
        </div>
        <div className="login_page__bottom_bar">
          <Row>
            <Col xs={2} xl={2}>
              <Usp_Logo />
            </Col>
            <Col xs={22} xl={22} className="align">
              <span>
                ©Copyright USP 2021 Todos os direitos reservados
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )

}

export default Login;